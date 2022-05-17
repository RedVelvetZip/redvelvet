---
title: How To Deploy an NFT Collection - Overview
date: '2021-12-22'
excerpt: Want To Create Your Own NFT Collection?
image: how-to-deploy-an-nft-collection.png
categories: [NFT, Smart Contract]
tags: [Polygon, Guide, Ethereum, Software Development, Solidity, IPFS, Metadata, Minting Dapp, Smart Contract]
isFeatured: true
---

This is an extremely high-level overview on the necessary steps to launch your own NFT collection. There are plenty of in depth tutorials on YouTube to actually complete the whole process, but this article will give you a general idea of the steps needed. Also, while it is fun to create an NFT collection with no utility, it’s also completely worthless! Don’t expect to make money selling images, you need to sell function & utility! These steps outline the most common process.

**1. Artwork:** using Photoshop or Gimp, create variations of artwork. You’ll want to have a list of several features, and a few options within each feature category to allow for a high number of unique combinations. Maybe you’ll have a background, skin color, mouth expression, and hat for a person. Using individually saved layers with one attribute each, you can create different combinations.

**2. Generate** the collection: Using a basic program (Python, JS, etc) you take your set of layers and randomly combine them to create unique images with one selection from each of your categories to create a full image. There needs to be organized metadata to go along with the images, and it will have to be generated during this process.

**3. Upload your work:** The metadata and images will need to be uploaded separately and linked on a decentralized database so they’re accessible for wallets and marketplaces. IPFS is the most popular solution here.

**4. Smart contract deployment:** A smart contract needs to be created to deploy your collection, making it possible for others to Mint your tokens or otherwise interact with your project. Once deployed, your project will be immediately visible on marketplaces such as Opensea, depending on your network of choice.

**5. Create a dapp:** People are able to mint. Great. But from where? You need a web app that allows users to access the minting function. Typically, NFTs are minted from the creator’s website and then only resold on marketplaces; they don’t often debut on marketplaces.
