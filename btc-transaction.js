// const bitcoin = require('bitcoinjs-lib')
// const axios= require
// let NETWORK = bitcoin.networks.bitcoin; 
// // let txb = new bitcoin.TransactionBuilder(NETWORK);
// // const sourceAddress='mkjggr4j9r8ew1SF6NvLvCg6q6Q3FA5Qtq'


// (async () => {
//     // Code that runs in your function
//     let address="mkjggr4j9r8ew1SF6NvLvCg6q6Q3FA5Qtq"
//     const utxos = await axios.get(
//             `https://sochain.com/api/v2/get_tx_unspent/${NETWORK}/${sourceAddress}`
//           );
//           console.log(utxos);
//     console.log(NETWORK)
// })()

// // (async ()=>{
// //     const utxos = await axios.get(
// //     `https://sochain.com/api/v2/get_tx_unspent/${NETWORK}/${sourceAddress}`
// //   );
// //   console.log(utxos);

// // })()
// // (async ()=>{
// //     // const utxos = await axios.get(
// //     //         `https://sochain.com/api/v2/get_tx_unspent/${NETWORK}/${sourceAddress}`
// //     //       );
// //     console.log('hi')
// // })()
// // (async () => {

// //     await console.log('jo')

// //   })()


// // //get unspent output details
// // let txid = ""; //transaction id
// // let outn = 0;  // n out

// // //add input
// // txb.addInput(txid, outn);

// // //add output
// // txb.addOutput("bc1qmwzvnazs8263g6v9ctscwheu329dvsax6jl369",35000); //first argument is address that will receive the funds, the second is the value to send in satoshis after deducting the mining fees. In this example there are 5000 satoshis in mining fees (40000-35000=5000)

// // //signing
// // let WIF = ""; //private key of the address associated with this unspent output
// // let keypair = bitcoin.ECPair.fromWIF(WIF, NETWORK);
// // txb.sign(0, keypair);
// // let tx = txb.build();
// // let txhex = tx.toHex();

// // console.log (txhex);



// // - Address  : mkjggr4j9r8ew1SF6NvLvCg6q6Q3FA5Qtq,
// // - Key : cTcDCLk3bW4uPmGhvyTr9BM3rZ175sWbwSsXbTibupLQUyxhXtU6,
// // - Mnemonic : spatial spell crane certain neither chicken panther universe draft obtain strike never