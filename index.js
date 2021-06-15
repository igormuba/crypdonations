const balance = require("crypto-balances-2");
const price = require("crypto-price");
const QRCode = require("easyqrcodejs-nodejs");
const TextToSVG = require("text-to-svg");
const textToSVG = TextToSVG.loadSync();
const sharp = require("sharp");
const express = require("express");
const http = require("http");
const text2png = require("text2png");
const { registerFont, createCanvas } = require("canvas");
const timeout = require("connect-timeout");

const port = process.env.PORT || 3000;

var app = express();
app.use(timeout("30s"));

const instanceBaseName = "Amazon ECS t4g.small for 1 year";
//"Servers I am hosting right now: \n" +instancesNow +" IPFS servers";
app.get("/:wallets/:goal/:explanation", async (req, res) => {
  const goalDollars = parseFloat(req.params.goal);
  console.log(goalDollars);
  const instancesNow = 3;
  const explanation = req.params.explanation;

  function firstOfNextMonth() {
    var d = new Date();
    d.setMonth(d.getMonth() + 1, 1);
    return d;
  }
  let wallets = req.params.wallets.split(",");
  console.log("wallets");
  console.log(wallets);

  let totalBalance = 0;
  for (let wallet of wallets) {
    try {
      totalBalance += await getBalancesForWallet(wallet);
    } catch (err) {
      console.log("Error on function getBalancesForWallet(wallet)");
      console.log(err);
    }
  }

  const date1 = new Date().getTime();
  const date2 = firstOfNextMonth();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays + " days");
  var result = (parseFloat(totalBalance) * 100) / goalDollars;
  let text =
    parseFloat(result).toFixed(2) +
    "% of the contributions goal reached; \n$" +
    parseFloat(totalBalance).toFixed(2) +
    " of " +
    parseFloat(goalDollars).toFixed(2) +
    " to rent and host a new IPFS server for 1 year;\n " +
    explanation;

  let textPNG = await text2png(text, {
    textColor: "white",
    strokeColor: "black",
    font: "45px sans-serif",
    strokeWidth: 2,
    lineSpacing: 10,
    padding: 20,
  });
  res.send(textPNG);
});

app.get("/:currency/:wallet", async function (req, res) {
  let { currency, wallet } = req.params;
  let qrCode = await getQRCodeForWallet(currency, wallet);
  // res.set("Content-Type", "image/png");
  // res.send(Buffer.from(qrCode));
  var img = Buffer.from(qrCode.split(";base64,").pop(), "base64");
  // res.setHeader("Content-Type", "image/png");
  res.writeHead(200, {
    "Content-Type": "image/png;",
    "Content-Length": img.length,
  });
  // res.end(img);
  // res.download(qrCode);
  res.end(img);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let wallets = [
  "0x8a3280907fb1483539d1684922c7600660ea0356",
  "19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV",
];
let walletsCurrency = ["ETH and Tokens", "BTC"];

async function getBalancesForWallet(wallet) {
  let result = await balance(`${wallet}`);
  console.log("result");
  console.log(result);

  let balances = 0;
  try {
    for (let [key, value] of Object.entries(result.balances)) {
      try {
        let obj = await price.getCryptoPrice("USD", key);
        console.log("obj");
        console.log(obj);
        if (obj && obj.price) {
          balances += obj.price * value;
        }
      } catch (err) {
        console.log("THERE IS AN ERROR ON THE PRICE");
        console.log("result");
        console.log(result);

        console.log("key");
        console.log(key);
        console.log("value");
        console.log(value);

        console.log(err);
      }
    }
  } catch (err) {
    console.log("THERE IS AN ERROR ON THE WALLET");
    console.log(wallet);
    console.log(`${err}`);
  }
  return balances;
}

// (async () => {
//   let sum = 0;

//   for (let wallet of wallets) {
//     sum += await getBalancesForWallet(wallet);
//   }

//   console.log("sum");
//   console.log(sum);

// })();

async function getQRCodeForWallet(currency, wallet) {
  var options = {
    text: wallet,
    title: currency,
    titleHeight: 48,
    titleFont: "normal normal bold 24px Arial",
  };

  // New instance with options
  var qrcode = new QRCode(options);

  // Save QRCode image
  let data = await qrcode.toDataURL();
  return data;
}

// (async () => {
//   const svg = textToSVG.getSVG("hello");
//   console.log(svg);

//   let test = getQRCodeForWallet(wallets[0]);
//   const roundedCornerResizer = sharp()
//     .resize(200, 200)
//     .composite([
//       {
//         input: roundedCorners,
//         blend: "dest-in",
//       },
//     ])
//     .png();
// })();
