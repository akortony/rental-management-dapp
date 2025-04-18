import React, { useState } from 'react';
import contract from './contracts/contract'; // Make sure you have this ready

const Login = () => {
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async (roleType) => {
    try {
      const account = await window.ethereum.request({ method: "eth_requestAccounts" }).then(acc => acc[0]);
      
      // Assign the role (Landlord or Tenant) directly using the imported contract
      await contract.methods.assignRole(account, roleType).send({ from: account });

      setRole(roleType);
      setStatus(`Logged in as ${roleType}`);
    } catch (error) {
      console.error("Login error:", error);
      setStatus("Error logging in.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin('Landlord')}>Login as Landlord</button>
      <button onClick={() => handleLogin('Tenant')}>Login as Tenant</button>
      <p>{status}</p>
    </div>
  );
};

export default Login;

