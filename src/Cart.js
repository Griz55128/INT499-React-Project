// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
	const navigate = useNavigate();
  return (
    <div className="page">
      <h1>Cart</h1>
      {/*<p>This page will be built in Week 4.</p>*/}
	   <button className="nav-button" onClick={() => navigate('/')}>
	  Home
	  </button>
    </div>
  );
}

export default Cart;
