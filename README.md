# 🏠 Rental Management DApp

A decentralized application (DApp) built on Ethereum using Solidity smart contracts to streamline rental agreements, deposit handling, and rent payments between landlords and tenants.

## 🔐 Features

- Smart contract-based **lease agreements**
- Secure **Ethereum-based rent payments**
- **Event logs** for lease creation, rent paid, and lease termination
- Landlord-only permissions for lease creation
- Error checking for dates and contract conditions

## 🛠️ Tech Stack

- Solidity (Smart Contracts)
- Ethereum Blockchain (Testnet or Local)
- Truffle / Hardhat for deployment
- Web3.js or Ethers.js for interaction
- Metamask for transaction signing

## 📦 Deployment

```bash
# Compile and deploy contract
truffle compile
truffle migrate --network development

# Run front-end locally
npm start
