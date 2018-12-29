const assert = require('assert'); // use for assertions
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Web3 is camel case because it is a constructor

// Update the two lines to fix a web3 error
const provider = ganache.provider();
const web3 = new Web3(provider)// working with an instance
const {interface, bytecode } = require('../compile'); // receives the only two properties from the exported smart contract object by solidity

let accounts;
let inbox;
beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts(); // Async/Await instead of promises

    // Use one of those accounts to deploy

    // the contract ("It tells waht exist in the block chain")
    inbox = await new web3.eth.Contract(JSON.parse(interface)) // instance with ABI object (not JSON) from constructor Contract() either interacts or to create new 
        .deploy({ data: bytecode, arguments: ['Hi there!']}) // it tells we need to deploy a contract (transaction object) with arguments
        .send({ from: accounts[0], gas: '1000000' })    // instructs web3 to send out a transaction that creates this contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address); // test if the address exists, it means it is deployed
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call(); // there are two parentheses one is for the method if any arguments and 
                                            //second one to customize transaction sending to the network
        assert.equal(message, 'Hi there!');
    });
});






// MOCHA TESTING DEMO

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;
// beforeEach(() => {
//     car = new Car();
// });

// describe('Car', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });
//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });