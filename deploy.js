const HDWalletProvider = require('truffle-hdwallet-provider'); // what account and network we are going to use
const Web3 = require('web3');
const { interface, bytecode } = require('./compile'); // one . is used as we are in the same directory

const provider = new HDWalletProvider(
    'damp frost betray fork tray original drastic loan visit earth celery cart',  // to generate account
    'https://rinkeby.infura.io/v3/a9ee51eb0dd04456942f5bde2edb91b1'               // to connect to rinkeby network
);

const web3 = new Web3(provider); // instance to connect to Rinkeby network