# crypdonations

## Generate goal calculator:

The address looks like
<code>(https://cryptodonateassist.herokuapp.com/ADDRESS/GOAL/EXPLANATION)</code>
And the result is:

![Goal](https://cryptodonateassist.herokuapp.com/19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV,0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2,D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL/90/3%20IPFS%20nodes%20already%20online)

Not sooo pretty... But I will open source it tomorrow, today I just want to rest.

But let us break it down and see how you can use it!

First, you have the main URL that is:
<code>https://cryptodonateassist.herokuapp.com/</code>
then the first parameter afetr the `.com/` (slash) is the list of addresses you want to check, separated by a `,`(comma) so in my case if I want to check my Bitcoin, Dogecoin and Ethereum (including ERC20 tokens!) it is `https://cryptodonateassist.herokuapp.com/19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV,0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2,D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL/`

And then again, after this last slash it is the total goal in my case, 90, so I add a 90 after the `/`

So the image URL becomes:
`https://cryptodonateassist.herokuapp.com/19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV,0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2,D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL/90/`

And then, the last parameter is the explanation or extra text, for example, I want to say that I have 3 IPFS nodes online, so I write it, BUT CHANGE THE SPACES FOR `%20`
so the text becomes `3%20IPFS%20nodes%20already%20online`

So, it is:
`URL` + `/ADDRESSES/GOAL/EXPLANATION`
URL=
`https://cryptodonateassist.herokuapp.com/`
ADRESSES (comma separated) = `9Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV,0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2,D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL`
GOAL:
`90`
EXPLANATION (change space for "%20"):
`3%20IPFS%20nodes%20already%20online`

All combined:
`https://cryptodonateassist.herokuapp.com/19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV,0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2,D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL/90/3%20IPFS%20nodes%20already%20online`

![Goal](https://cryptodonateassist.herokuapp.com/19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV,0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2,D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL/90/3%20IPFS%20nodes%20already%20online)

## Generate Wallet QR Code:

This one is simple, the same URL, but the parameters are
`/COIN/ADDRESS`

If you want to add spaces on the coin name, also CHANGE SPACES FOR "%20", so "Ethereum and Tokens" becomes:
`Ethereum%20and%20Tokens`

So, again it is:
`URL` + `/COIN/ADDRESS`
URL=
`https://cryptodonateassist.herokuapp.com/`
COIN TITLE (separated by "%20") =
`Ethereum%20and%20Tokens`
ADDRESS:
`0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2 `

Together it becomes:
`https://cryptodonateassist.herokuapp.com/Ethereum%20and%20Tokens/0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2`

![Ethereum and Tokens](https://cryptodonateassist.herokuapp.com/Ethereum%20and%20Tokens/0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2)

# And the result (considering I spend half a day only):

![Goal](https://cryptodonateassist.herokuapp.com/19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV,0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2,D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL/90/3%20IPFS%20nodes%20already%20online)

![Bitcoin](https://cryptodonateassist.herokuapp.com/Bitcoin/19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV) 19Re31p3dfLSxjFGtpChZe1zvcfkwkYRuV

![Ethereum and Tokens](https://cryptodonateassist.herokuapp.com/Ethereum%20and%20Tokens/0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2) 0x4E48F9Ca8A335e03e6549c55749E6aD724464dA2

![Doge Coin](https://cryptodonateassist.herokuapp.com/Doge%20Coin/D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL) D7UMxBj6rkB7mKGBuHXjo9RN6YMSif1zwL
