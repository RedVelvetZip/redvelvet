---
title: Liquidity Mining
date: '2022-05-25'
excerpt: Liquidity mining is the strategy of offering your assets as a trading pair in exchange for financial rewards
image: Liquidity Mining.png
categories: [DeFi Concepts]
tags: [DeFi Concepts, Yield, DEXs]
isFeatured: false
---
#Liquidity Mining

##Introduction
If I want to trade my US Dollars for Euros, I must find someone that both has Euros and is willing to accept Dollars in exchange for them. Some incentive must be present for the other party to be willing to complete this transaction for me, so logically I'd have to pay a fee for that service. This provider of assets and exchanges is a liquidity miner.
Decentralized finance allows for individuals to provide liquidity, stake, borrow, lend, and overall support financial ecosystems. Participators are rewarded for allowing such platforms to use their assets. In traditional finance, liquidity pools are controlled by centralized institutions, so users may be able to exchange assets but will not be able to provide liquidity for others and earn rewards doing so. In general, acting as a liquid provider to earn rewards is known as <u>yield farming</u>. More specifically, providing assets for exchanges and automated market makers is known as liquidity mining.  **Liquidity mining is the strategy of offering your assets as a trading pair in exchange for financial rewards**. 

##Why Liquidity Mine?

To exchange assets on a DEX(decentralized exchange), we need a trading pair with a liquidity pool. Let's say there's an LP for ETH and USDC. If I have 5 ETH (worth \$10k USD) and 10,000 USDC (worth $10k USD), and they're just sitting around in my wallet, I can contribute them to this DEX's LP for ETH-USDC. Why would I do that? Well, there's a demand for people to swap their ETH for USDC, and vice versa. I would provide both ETH and USDC so people can swap assets back and forth.
I could say hey, I'll give you quick and easy access to swap your ETH and USDC assets, if you give me say, 0.1% of the swapped value as a fee. Sounds like a good deal for the counterpart, as they would otherwise have to use a centralized exchange to swap their assets and potentially pay a higher fee; the entire business model of some centralized exchanges is to charge you a fee on your buying/selling/swapping transactions. Also, on a DEX, KYC isn't a requirement; privacy is a right.
Looks like there's an incentive for both parties here. More and more people can contribute to an LP, which in turn stablizes the price and splits up the profits between all of the providers aka liquidity miners.

##Impermanent Loss

The main risk associated with liquidity mining is impermanent loss. Let's return to our theoretical LP with equal amounts of ETH and USDC, \$10k each. LPs begin equally weighted with a 50/50 ratio, and exchange rates are not manually adjusted to match the overall market; rates adjust based on supply and demand in the specific LP. A product constant is achieved by multiplying the quantity of each token; k = y * x where y is # of ETH and x is # of ETH provided. When everyone is trading their USDC for ETH in your LP, and you end up with tons of USDC and very little ETH, that ETH becomes more expensive because there's less of it. That's how markets work in general, just on a much smaller scale for our LP example. When your LP is not perfectly synced up with the market, the price differences provide an opportunity for a trader to make money, an arbitrage opportunity. This incentive gets traders to act on it, thus aligning your pool with the greater market again.
If the price of ETH on the general market increases 50% from its original \$2000 to \$3000, an arbitrage opportunity has been created. A trader sees that they can buy ETH from your LP for only \$2000, and then go sell it somewhere else for the going market price of \$3000. Now after reaching equilibrium due to traders, and still maintaing the product constant K of the pool, the balances in your pool have shifted from 
<p style="text-align: center;">5.0 ETH : 10,000 USDC &nbsp;  to &nbsp;  4.0824 ETH : 12,247 USDC</p>
The value of your pool has from from
<p style="text-align: center;">20,000 USD &nbsp;  to &nbsp;  24,495 USD</p>
You still made money, but if you had just held onto your 5ETH and 10kUSDC, you'd have 25,000 USD right now at market price 3k for ETH. Impermanent loss here was roughly 2%. Now this isn't accounting for fees, the profits you would have made on any swaps from the arbitrage trader or any other traders, and a 50% gain is extremely volatile, but you get the point; some profits could have been missed out on.

The best ways to avoid impermanent loss are:
- Use stable assets, or at least assets that are tightly coupled
- Make sure the trading fees are high enough to compensate you in the case of realistic value changes
- Only provide one side of the liquidity. Certain platforms have ways for you to only provide one asset and gain yield, but this is a slightly different process.


