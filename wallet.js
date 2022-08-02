//imports 
const bip39= require("bip39")
const {Keypair, LAMPORTS_PER_SOL,Transaction, SystemProgram,sendAndConfirmTransaction} = require("@solana/web3.js");
const {createMint,getMint,getOrCreateAssociatedTokenAccount,mintTo,getAccount}= require('@solana/spl-token')
const connection = require('./connection')
// connection

const mnemonic =
  "pill tomorrow foster begin walnut borrow virtual kick shift mutual shoe scatter";
const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
// creating keypair
const keypair = Keypair.fromSeed(seed.slice(0, 32));

(async () => {
    // getting balnace of created account 
    let balance = await connection.getBalance(keypair.publicKey);
    // account public key to which solana is to transfer
    let to='HBTH6GzLAqHYZKiDsHnf3FvUWPXhzY1rEBdBU3YpEvfF'
    console.log(`${balance / LAMPORTS_PER_SOL} SOL`);
    

    // create transaction to transfer sol
    const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: keypair.publicKey,
          toPubkey: to,
          lamports: LAMPORTS_PER_SOL / 100,
        }),
      );
    
      // Sign transaction, broadcast, and confirm
      const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [keypair],
      );
      console.log('Balance Transfer SIGNATURE', signature)


    // spl token creation sript
    // create spl token

    const mint = await createMint(
      connection,
      keypair,
      keypair.publicKey,
      keypair.publicKey,
      9 // We are using 9 to match the CLI decimal default exactly
    );
    
    console.log('token identifer ',mint.toBase58());

    //get mint info 

    const mintInfo = await getMint(
      connection,
      mint
    )
    
    console.log('inital supply',mintInfo.supply);

    // create account for token
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    )
    console.log('created associaated account',tokenAccount.address.toBase58());

    // get token info

    const tokenAccountInfo = await getAccount(
      connection,
      tokenAccount.address
    )
    
    console.log('token account info',tokenAccountInfo.amount);


    // 0

    await mintTo(
      connection,
      keypair,
      mint,
      tokenAccount.address,
      keypair,
      100000000000 // because decimals for the mint are set to 9 
    )
    console.log(keypair.publicKey.toString())





  })();


// let balance =  connection.getBalance(keypair.publicKey);
// console.log(`${balance / LAMPORTS_PER_SOL} SOL`);
// console.log(keypair);
