import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // notice Routes instead of Switch
import Navbar from './Navbar';
import Login from './Login';
import Payment from './Payment';
import './App.css'; // your styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Rental Agreement DApp</h1>
          <p>Securely manage your rental agreements using blockchain technology.</p>
          <div className="buttons">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/payment" className="btn">Make Payment</Link>
          </div>
        </div>
      </div>

      {/* Use Routes instead of Switch */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;


