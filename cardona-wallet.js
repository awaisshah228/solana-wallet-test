const { Seed, WalletServer } = require('cardano-wallet-js');
    
let walletServer = WalletServer.init('http://you.server.com');
let recoveryPhrase = Seed.generateRecoveryPhrase();
let mnemonic_sentence = Seed.toMnemonicList(recoveryPhrase);
let passphrase = 'tangocrypto';
let name = 'tangocrypto-wallet';
    
let wallet = await walletServer.createOrRestoreShelleyWallet(name, mnemonic_sentence, passphrase);

console.log(wallet);