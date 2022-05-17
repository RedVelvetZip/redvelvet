---
title: Mining
date: '2022-02-01'
excerpt: There are two main methods- Proof of Work and Proof of Stake
image: mining.png
categories: [Cryptocurrency, Basics]
tags: [Cryptocurrency, Basics]
isFeatured: false
---

First things first, let's talk about what a blockchain is (and learn a few words)

Cryptocurrencies use a blockchain to keep track of transactions. This is just a digital ledger. The digital ledger is a source of trust. I can accept a payment of 100 tokens from you by trusting the ledger, and not needing to trust the sender; the ledger keeps track of all transactions, so it can check the sender’s wallet’s net transactions to confirm that the 100 tokens are really there and available to be sent to me.

So what’s updating on the blockchain? After some arbitrary number of transactions, a new block is formed and added to the chain. This block is simply a collection of transactions, and it is confirmed by many different nodes. Each node is a person/computer/group that’s supporting the network by validating blocks. We need to validate blocks to make sure nobody is trying to send more money than they have via simultaneous transactions, or cheat in some other way. Having many different nodes confirming a block ensures that there isn’t one bad actor lying about the transactions. Confirming a block is also known as mining a block. That’s where the term miner comes in; mining crypto = supporting the network.

Consensus mechanism are needed because we have a situation where all of these nodes need to trust that the others are also behaving in order to come to an agreement – the agreement being the validation of the current block. Providing this vital service for the security of the network is financially rewarded with native tokens.
How are blocks confirmed?

There are two main methods: Proof of Work and Proof of Stake

Proof of Work

This is a method where your computer is tasked with solving incredibly complex math problems in order to reach consensus on the blockchain. Every node is trying to complete this math problem that is unique for each block, and one that solves it gets to validate the next block and get the block reward. These math problems are difficult to solve, but extremely easy to confirm; it takes a lot of work/computing power to find the right answer, but when given the solution it’s quick and easy to confirm it. When one node gets the solution, it is broadcast to all other nodes. Bitcoin’s block time is about 10 minutes because that’s roughly how long it takes to solve the problem and validate a block; as computers get more advanced and more nodes are searching for the answer, BTC’s problems become more difficult to keep a semi consistent time frame per block.

Pros to PoW

Security: the requirement of computational power keeps the network secure because of how difficult it would be to take control of a large portion of it.

Decentralization: distributed consensus means large numbers of individuals that are geographically distributed have a say in the network. No single group can take control this way.

Cons to PoW

51% attack: theoretically, if one group controlled 51% of the computing power on the network they would be able to do anything they want and provide themselves with network consensus.

Resource consumption: hardware, space, and electricity are needed to run computers that are solving these equations. ASIC miner demand contributes to the current chip shortage that affects other industries such as gaming. There are indeed valid concerns over energy usage, but they’re blown out of proportion in my opinion;  the Cambridge Bitcoin Energy Consumption Index (CBECI) estimates Bitcoin’s annual energy use at 138 terawatt hours (TWh), using 0.62% of global electricity, or a similar amount globally as refrigerators in the US.

Proof of Stake

‘Stakers’ replace miners in the PoS system. A deterministic algorithm decides which staker gets to create a new block, rather than letting miners computationally compete for it. Validators/nodes are financially rewarded just like in PoW. Instead of offering computing power, validators offer to ‘stake’ or lock up their tokens. If you stake some tokens, you may not be able to withdraw them for a certain amount of time, and in return you get staking rewards – this is very similar to yield. Bad actors can be punished by having their stake ‘slashed’ (burned, removed from circulation, destroyed) if they try to cheat the system and add faulty transactions to a block.
Pros

Barrier to entry: you don’t need an expensive computer capable of mining, you can just stake your tokens whether you’re holding a tiny bit or a large amount – you get the same percentage return either way.

Resistant to 51% attack: you could still acquire 51% or more of the tokens and stake them, but then if you do anything ‘wrong’ to the network, it’s value will plummet and you’d be the true loser in that situation. The more you own/stake, the more incentive you have for the network to perform properly.

Cons

Security/Centralization: large ‘pools’ and companies can acquire a large share of the network. That doesn’t mean they’d be bad actors, but it makes things more centralized and gives smaller parties less of a say in decision making.
