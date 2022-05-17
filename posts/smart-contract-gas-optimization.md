---
title: Smart Contract Gas Optimization
date: '2022-01-12'
excerpt: Gas optimization is the same as writing efficient code. If every line of code costs more gas, you want your functions to be succinct.
image: smart-contract-gas-optimization.png
categories: [Smart Contracts, Software Development]
tags: [Ethereum, Smart Contracts, Software Development, Solidity]
isFeatured: true
---

Every time you attempt to complete an action on the Ethereum network, it is considered writing to the network. Writing to the network requires miners to add your transaction to a block (more about this in the mining article). The more you write to the network, the more space is taken up in each finite block and the higher the opportunity cost of writing your function as compared to the many other network requests. This is why certain actions on the Ethereum network cost more than others – because more is being written.

Just like any other software function, there are infinite ways to write a smart contract and achieve the same goal. That leaves a lot up to preference. When you’re writing code in other scenarios, inefficiencies in your logic may slow the program down by fractions of a second, but the repercussions are negligible. When you’re writing to the Ethereum network, these inefficiencies are expensive. More efficient smart contracts cost much less gas, not only to deploy but also to interact with. Optimizing your smart contracts will save gas for both you as a developer and all of your users.

Gas optimization is the same as writing efficient code. If every line of code costs more gas, you want your functions to be succinct. No need to have a bunch of bells and whistles on your contract because you know how to – it’s only going to waste gas. For example, many standard ERC721 contracts include a function that allows whitelisted wallets to mint, or to hide/reveal the metadata to have a hyped up reveal. Sure they’re great options to have, but they’re not worth having unless you’re going to use them. Each functionality likely requires multiple functions and function calls within the contract code. You save gas because the whitelist function is not in the code and doesn’t have to be deployed. The user saves money because the mint function doesn’t need to call a whitelist check within itself every time, resulting in a shorter section of code and less data being written to the network.

Removing unnecessary functionalities is not the only way to save gas; computing the same exact logic in a more efficient style will also save gas. Even **comparators** ( > , || , & , …)
and **operators** ( + , x , – ) cost gas, as computation is done to execute them. Structuring your comparators in a way to reduce usage helps.

For example, if you have to check two conditions: in an **OR** statement you begin with the more likely to be **true**; in an **AND** statement you begin with the more likely to be **false**.

A couple developers found a way to cut minting gas costs by up to **70%** with only one action: removing OpenZeppelin’s ERC721Enumerable function totalSupply() and replacing it with a local counter to calculate current total token supply. A ton of libraries are imported from OpenZeppelin to create a standard ERC721 token. [OpenZeppelin](https://openzeppelin.com/) is amazing, but there’s always room for improvement and innovation – especially in this space. See their article and code [HERE](https://shiny.mirror.xyz/OUampBbIz9ebEicfGnQf5At_ReMHlZy0tB4glb9xQ0E)

Optimizing your code saves gas for you and your users every step of the way. Maybe your users would use that saved eth to further support your project, who knows? If nothing else, it’s best practice and will make you a better developer.
