import Web3 from 'web3';
import MoneyManagement from './MoneyManagement.json'; // ✅ no ../../ anymore

// Setup Web3 instance using MetaMask's provider
const web3 = new Web3(window.ethereum);

// After running `truffle migrate`, use the contract address that was deployed
const contractAddress = "0x382db38aB1409924d9DCA8F786E7e68262331E4c"; 

const contract = new web3.eth.Contract(MoneyManagement.abi, contractAddress);

export default contract;
