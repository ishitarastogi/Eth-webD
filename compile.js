const path = require('path');
const fs = require('fs');
const solc = require('solc');
 
const helloPath = path.resolve(__dirname, 'Hello.sol');
const hellosol = fs.readFileSync(helloPath, 'UTF-8');
 
var input = {
    language: 'Solidity',
    sources: {
        'hello.sol': {content : hellosol}
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};
 
var output = JSON.parse(solc.compile(JSON.stringify(input)))
console.log(solc.compile(hellosol,1).contracts[':Hello']);
