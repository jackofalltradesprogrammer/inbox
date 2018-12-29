const path = require('path'); //cross-platform compatibility
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // To get the path on any system 
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source, 1)); // compiles the solidity source code 