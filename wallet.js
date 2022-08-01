const bip39= require("bip39")
const {Connection, Keypair, LAMPORTS_PER_SOL} = require("@solana/web3.js");

// connection
const connection = new Connection("https://devnet.genesysgo.net/");
const mnemonic =
  "pill tomorrow foster begin walnut borrow virtual kick shift mutual shoe scatter";
const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
const keypair = Keypair.fromSeed(seed.slice(0, 32));
(async () => {
    let balance = await connection.getBalance(keypair.publicKey);
    console.log(`${balance / LAMPORTS_PER_SOL} SOL`);
  })();
// let balance =  connection.getBalance(keypair.publicKey);
// console.log(`${balance / LAMPORTS_PER_SOL} SOL`);
// console.log(keypair);
