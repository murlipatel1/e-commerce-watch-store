import React, { useState } from 'react';
import './address.css'
function UpdateBillingAddress() {
    const [billingAddress, setBillingAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const fullAddress = `${billingAddress}, ${city}, ${state} - ${postalCode}`;
        const token = localStorage.getItem('userToken');

        fetch('http://localhost:5000/user/update-address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ fullAddress })
        })
        .then(response => {
            if (response.ok) {
                alert('Address updated successfully!');
                window.location.href = './payment.html';
            } else {
                alert('Failed to update address. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while updating address. Please try again later.');
        });
    };

    const handleDefaultAddress = () => {
        window.location.href = './payment';
    };

    return (
        <div className='addiv'>
            <h3 className='adh3'>Update Billing Address</h3>
            <form className='adform' onSubmit={handleFormSubmit}>
                <label className='adlabel' htmlFor="billingAddress">Billing Address:</label>
                <input className='adinput' type="text" id="billingAddress" name="billingAddress" placeholder="Enter billing address" required value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} />

                <label className='adlabel' htmlFor="city">City:</label>
                <input className='adinput' type="text" id="city" name="city" placeholder="Enter city" required value={city} onChange={(e) => setCity(e.target.value)} />

                <label className='adlabel' htmlFor="state">State:</label>
                <input className='adinput' type="text" id="state" name="state" placeholder="Enter state" required value={state} onChange={(e) => setState(e.target.value)} />

                <label className='adlabel' htmlFor="postalCode">Postal Code:</label>
                <input className='adinput' type="text" id="postalCode" name="postalCode" placeholder="Enter postal code" required value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                
                <button className='adbutton' type="submit">Update Address</button>
            </form>
            <br />
            <h3 className='adh3'>If you want to go with default address</h3>
            <button className='adbutton' id="button1" onClick={handleDefaultAddress}>Go to Payment Gateway</button>
        </div>
    );
}

export default UpdateBillingAddress;
