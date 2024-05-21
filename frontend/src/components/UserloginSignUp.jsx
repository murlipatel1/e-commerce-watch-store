import React, { useState } from 'react';
import './Login.css'
function UserLoginSignup() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupAddress, setSignupAddress] = useState('');
  const [showLoginContainer, setShowLoginContainer] = useState(true);
  const [showSignupContainer, setShowSignupContainer] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (isValidEmail(loginEmail)) {
      try {
        const response = await fetch('http://localhost:5000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('userToken', data.token);
          alert('Login successful!');
          window.location.href = './productdisplay';
          // Redirect or perform other actions after successful login
        } else {
          alert('Login failed. Invalid credentials.');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      alert('Invalid Email');
    }
  };

  const handleSignup = async () => {
    if (isValidEmail(signupEmail)) {
      try {
        const response = await fetch('http://localhost:5000/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: signupUsername,
            email: signupEmail,
            password: signupPassword,
            address: signupAddress,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Signup successful! You can now login.');
          setShowSignupContainer(false);
          setShowLoginContainer(true);
        } else {
          alert('Signup failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
    } else {
      alert('Invalid Email');
    }
  };

  const handleShowSignup = () => {
    setShowLoginContainer(false);
    setShowSignupContainer(true);
  };

  const handleShowLogin = () => {
    setShowSignupContainer(false);
    setShowLoginContainer(true);
  };

  return (
    <div className='ldiv'>
      {showLoginContainer && (
        <div className="lcontainer">
          <h2 className='lh2'>User Login</h2>
          <input className='linput'
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input className='linput'
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button className='lbutton' onClick={handleLogin}>Login</button>
          <p className='lp'>
            Don't have an account? <a className='la' href="#" onClick={handleShowSignup}>Sign Up</a>
          </p>
        </div>
      )}

      {showSignupContainer && (
        <div className="lcontainer">
          <h2 className='lh2'>User Sign Up</h2>
          <input className='linput'
            type="text"
            placeholder="Username"
            value={signupUsername}
            onChange={(e) => setSignupUsername(e.target.value)}
            required
          />
          <input className='linput'
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input className='linput'
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <input className='linput'
            type="address"
            placeholder="Address"
            value={signupAddress}
            onChange={(e) => setSignupAddress(e.target.value)}
          />
          <button className='lbutton' onClick={handleSignup}>Sign Up</button>
          <p className='lp'>
            Already have an account? <a className='la' href="#" onClick={handleShowLogin}>Login</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default UserLoginSignup;
