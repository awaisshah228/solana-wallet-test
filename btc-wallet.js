//Import dependencies
const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32')

// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc)

const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//Define the network
// const network = bitcoin.networks.bitcoin //use networks.testnet for testnet
const network = bitcoin.networks.testnet //use networks.testnet for testnet

// Derivation path
// const path = `m/49'/0'/0'/0` // Use m/49'/1'/0'/0 for testnet
const path = `m/88'/0'/0'/0` // Use m/49'/1'/0'/0 for testnet

let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)
let root = bip32.fromSeed(seed, network)

let account = root.derivePath(path)
let node = account.derive(0).derive(0)

// let btcAddress = bitcoin.payments.p2pkh({
//   pubkey: node.publicKey,
//   network: network,
// }).address
let btcAddress = bitcoin.p2wpkh({
  pubkey: node.publicKey,
  network: network,
}).address

// const btcAddress = bitcoin.payments.p2wpkh({ pubkey: node.publicKey });
// console.log(btcAddress)

console.log(`

Wallet generated:

 - Address  : ${btcAddress.address},
 - Key : ${node.toWIF()}, 
 - Mnemonic : ${mnemonic}
     
`)
// console.log('s'+node.toWIF()+'e')


