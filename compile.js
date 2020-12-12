const path = require('path');
const fs = require('fs'); 
const solc = require('solc'); 
const helloPath = path.resolve(__dirname,'contracts', 'HelloWorld.sol');
const content = fs.readFileSync(helloPath, 'utf-8'); 

const input = {
  language: 'Solidity',
  sources: {
    'HelloWorld.sol' : {
      content, 
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
}; 



console.log(solc.compile(content,1).contracts[':HelloWorld']);