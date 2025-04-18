import Web3 from 'web3';

let web3;
let contract;
let userAccount;

const contractAddress = '0x382db38aB1409924d9DCA8F786E7e68262331E4c'; // Replace with your deployed contract address
const contractABI = [ {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "constant": true,
  "inputs": [],
  "name": "get",
  "outputs": [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "internalType": "string",
      "name": "v",
      "type": "string"
    }
  ],
  "name": "set",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}]; // Replace with your contract ABI

// Initialize web3
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  window.ethereum.enable().then(() => {
    web3.eth.getAccounts().then(accounts => {
      userAccount = accounts[0];
    });
  });
} else {
  alert("Please install Metamask.");
}

// Initialize the contract
contract = new web3.eth.Contract(contractABI, contractAddress);

export const getContract = () => contract;
export const getWeb3 = () => web3;
export const getUserAccount = () => userAccount;
