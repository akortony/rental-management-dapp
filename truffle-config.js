require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache default port
      network_id: "*", // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.5.16", // ✅ matches your system solc
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};

