
const {Connection}= require('@solana/web3.js')

// connectionn to solana cluster
const connection = new Connection("https://devnet.genesysgo.net/");

module.exports= connection;