const{AccountLayout, TOKEN_PROGRAM_ID} = require ("@solana/spl-token");
const {clusterApiUrl, Connection, PublicKey} = require("@solana/web3.js") ;


(async () => {
  const connection = require('./connection')
  const tokenAccounts = await connection.getTokenAccountsByOwner(
    new PublicKey('5ZWj7a1f8tWkjBESHKgrLmXshuXxqeY9SYcfbshpAqPG'),
    {
      programId: TOKEN_PROGRAM_ID,
    }
  );

  console.log("Token                                         Balance");
  console.log("------------------------------------------------------------");
  tokenAccounts.value.forEach((e) => {
    const accountInfo = AccountLayout.decode(e.account.data);
    console.log(`${new PublicKey(accountInfo.mint)}   ${accountInfo.amount}`);
  })

})();

/*
Token                                         Balance
------------------------------------------------------------
7e2X5oeAAJyUTi4PfSGXFLGhyPw2H8oELm1mx87ZCgwF  84
AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  100
AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  0
AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  1
*/