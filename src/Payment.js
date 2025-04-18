import React, { useState } from 'react';
import { getWeb3, getContract, getUserAccount } from './web3';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handlePayRent = async () => {
    try {
      const account = await getUserAccount();
      const contract = getContract();

      // Pay Rent: Only tenants can pay rent
      const result = await contract.methods.payRent().send({
        from: account,
        value: web3.utils.toWei(amount, 'ether')
      });

      setStatus(`Successfully paid ${amount} ETH as rent.`);
    } catch (error) {
      console.error("Payment error:", error);
      setStatus("Error paying rent.");
    }
  };

  const handleWithdrawDeposit = async () => {
    try {
      const account = await getUserAccount();
      const contract = getContract();

      // Withdraw Deposit: Only landlords can withdraw deposit
      const result = await contract.methods.withdrawDeposit().send({ from: account });

      setStatus(`Successfully withdrawn the deposit.`);
    } catch (error) {
      console.error("Withdraw error:", error);
      setStatus("Error withdrawing deposit.");
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <div>
        <input
          type="text"
          placeholder="Enter amount to pay (in ETH)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handlePayRent}>Pay Rent</button>
      </div>
      <button onClick={handleWithdrawDeposit}>Withdraw Deposit</button>
      <p>{status}</p>
    </div>
  );
};

export default Payment;
