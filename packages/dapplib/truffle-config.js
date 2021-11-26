require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food warm decrease stereo modify history light army general'; 
let testAccounts = [
"0x4a9322810d664465c618c5fe674b8cd420269320fc2d9c2dd0b59cb29e8b5c7b",
"0xce5f0a41dbfd019e3482b26fb32eab46fae2a8276010578d462fcc406e3c9d8f",
"0x3e4a670d83bfa99fe101e6990d5f425c9e8bcce4927e4a52a98f582be0794965",
"0x744af3bca0241310f0776a6b9b70d92999bed440d81d8e867d88d64e175043a7",
"0x4c6d4604f00020a4b8cc7c53de4bfa029f88fcd0e0850fa8cbece6ecbf719177",
"0xd3f37087b35def5a1ce221aaa251062a07b31097e149d80d0aeb41ec99a1cd17",
"0xc380a96dfb4308973945a07846db01bbb697121ce0a520f422e27156ce2f5bde",
"0x14373cdd5b57563497a6795592a1ff09a4dd122a7cc6dda0f15effac061a8c01",
"0x6b2cdf1ebfdbc6d0a2754170903f8ef329c01e12420f874fb7db48afa456f203",
"0xba0cb9c864c7660f39d776e7eae87a88a0f08343cd4fe0bf41b8a243c2b27c5d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


