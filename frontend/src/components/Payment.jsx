import React, { useState, useEffect } from 'react';
import './payment.css'; // Import CSS file

const PaymentPage = () => {
  const [userAddress, setUserAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  // Fetch user's address when the page loads
  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        const response = await fetch('http://localhost:5000/user/address', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('userToken')
          }
        });

        const data = await response.json();
        if (data.success) {
          setUserAddress(data.address);
        } else {
          console.error('Failed to fetch user address');
        }
      } catch (error) {
        console.error('Error fetching user address:', error);
      }
    };

    fetchUserAddress();
  }, []);

  // Function to handle form submission for card payment
  const handleCardPayment = async (event) => {
    event.preventDefault();

    // Your payment submission logic here
    let addressToDeliver = userAddress;

    if (cardNumber && cvv) {
      // Your card payment logic here
      // Example: Submit payment details to backend, process payment, etc.
      addressToDeliver = userAddress; // Use user's address
    }

    alert(`Payment successful! Thank you for your purchase. Your product will be delivered to ${addressToDeliver} within 3-4 working days.`);

    // Redirect to homepage or any other page
    window.location.href = '/';
  }

  // Function to handle cash on delivery payment
  const handleCashOnDelivery = () => {
    alert(` Thank you for your purchase. Your product will be delivered to ${userAddress} within 3-4 working days. Payment will be collected upon delivery.`);

    // Redirect to homepage or any other page
    window.location.href = '/';
  }

  return (
    <div className="paycontainer2">
    <div className="paycontainer">
      <div className="payheader">
        <h1 className='ph1'>Payment Page</h1>
      </div>

      <div className="payment-form">
        <h3 className='ph3' id="userAddress">Product Delivered At: {userAddress}</h3>

        <h2>Card Payment</h2>
        <form onSubmit={handleCardPayment}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter card number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />

          <button type="submit">Pay Now</button>
        </form>
      </div>

      <div className="cash-on-delivery">
        <h2 className='ph2'>Cash on Delivery</h2>
        <p className='pp'>Pay cash upon delivery of your items.</p>
        <button onClick={handleCashOnDelivery}>Pay on Delivery</button>
      </div>
    </div>
    </div>
  );
}

export default PaymentPage;
