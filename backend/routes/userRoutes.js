const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Product = require('../models/Product');
const Feedback = require('../models/Feedback');
const router = express.Router();

// Normal User Signup
router.post('/user/signup', async (req, res) => {
  try {
    const { username, email, password, address } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address
    });

    const savedUser = await newUser.save();

    res.status(201).json({ user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Normal User Login
router.post('/user/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, isAdmin: false }, 'user_secret_key', {
      expiresIn: '1d',
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/user/update-address', async (req, res) => {
  const token = req.headers.authorization; // Assuming token is sent in the authorization header

  if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
      // Verify the token
      const decoded = jwt.verify(token, 'user_secret_key'); // Replace 'your_secret_key' with your actual secret key 

      console.log(decoded);
      // Find the user by their ID from the decoded token
      const user = await User.findById(decoded.userId);

      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      // Extract the new address from the request body
      const { fullAddress } = req.body;

      // Update the address field of the user with the new fullAddress
      user.address = fullAddress;

      // Save the updated user object to the database
      await user.save();

      // Respond with a success message
      res.status(200).json({ message: "Address updated successfully" });
  } catch (error) {
      console.error("Error updating address:", error);
      res.status(500).json({ error: "An error occurred while updating address" });
  }
});


// Route to fetch user's address
router.get('/user/address', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization;

    // Verify the token
    jwt.verify(token, 'user_secret_key', async (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Extract user ID from decoded token
      const userId = decodedToken.userId;

      // Find the user by ID and retrieve the address
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userAddress = user.address;

      res.status(200).json({ success: true, address: userAddress });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Middleware to verify user authentication
const authenticateUser = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'user_secret_key');
  
      req.userId = decodedToken.userId;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  // User Add Product to Cart
  router.post('/user/add-to-cart/:productId', authenticateUser, async (req, res) => {
    try {
      const userId = req.userId;
      const productId = req.params.productId;
  
      // Check if the product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Update user's cart
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: { cart: { productId, quantity: 1 } },
        },
        { new: true }
      );
  
      res.status(200).json({ user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // User Submit Feedback
router.post('/user/submit-feedback', authenticateUser, async (req, res) => {
    try {
      const userId = req.userId;
      const { message } = req.body;
  
      const newFeedback = new Feedback({
        userId,
        message,
      });
  
      const savedFeedback = await newFeedback.save();
  
      res.status(201).json({ feedback: savedFeedback });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const username = user.username;
      res.status(200).json({ username });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  router.post('/user/payment/card', async (req, res) => {
    try {
      const { email, cardDetails } = req.body;
      
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      // Update user's card details
      user.cardDetails = cardDetails;
      await user.save();
  
      res.json({ message: "Card details saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Route to handle payment with cash on delivery
  router.post('/user/payment/cod', async (req, res) => {
    try {
      const { userId } = req.body;
      
      // Implement your logic for cash on delivery payment here
      
      res.json({ message: "Order placed successfully with cash on delivery" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
module.exports = router;
