/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * Hands-off deployment with Infura
 * --------------------------------
 *
 * Do you have a complex application that requires lots of transactions to deploy?
 * Use this approach to make deployment a breeze 🏖️:
 *
 * Infura deployment needs a wallet provider (like @truffle/hdwallet-provider)
 * to sign transactions before they're sent to a remote public node.
 * Infura accounts are available for free at 🔍: https://infura.io/register
 *
 * You'll need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. You can store your secrets 🤐 in a .env file.
 * In your project root, run `$ npm install dotenv`.
 * Create .env (which should be .gitignored) and declare your MNEMONIC
 * and Infura PROJECT_ID variables inside.
 * For example, your .env file will have the following structure:
 *
 * MNEMONIC = <Your 12 phrase mnemonic>
 * PROJECT_ID = <Your Infura project id>
 *
 * Deployment with Truffle Dashboard (Recommended for best security practice)
 * --------------------------------------------------------------------------
 *
 * Are you concerned about security and minimizing rekt status 🤔?
 * Use this method for best security:
 *
 * Truffle Dashboard lets you review transactions in detail, and leverages
 * MetaMask for signing, so there's no need to copy-paste your mnemonic.
 * More details can be found at 🔎:
 *
 * https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard/
 */

// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;
module.exports = {
  networks: {
    live: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Only mainnet
      gasPrice: "10000000000", // 10 gwei
      gas: "5000000", // 0.02 eth at 4 gwei price
    },
  },
  compilers: {
    solc: {
      version: "^0.8.4",
    },
  },
};

// TO CONNECT TO ROPSTEN (https://medium.com/coinmonks/steps-to-deploy-a-contract-using-metamask-and-truffle-7ae65e6d8dc8)
//var HDWalletProvider = require("truffle-hdwallet-provider");var infura_apikey = "XXXXXX";
//var mnemonic = "twelve words you can find in metamask/settings/reveal seed words";module.exports = {
//  networks: {
//    development: {
//      host: "localhost",
//      port: 8545,
//      network_id: "*" // Match any network id
//    },
//    ropsten: {
//      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
//      network_id: 3
//    }
//  }
//};
