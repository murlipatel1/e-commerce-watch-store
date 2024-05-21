const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Admin = require('../models/Admin');
const Product = require('../models/Product');
const User = require('../models/User');
const Feedback = require('../models/Feedback');

const router = express.Router();

// Admin Signup
router.post('/admin/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      username,
      email,
      password: hashedPassword,
    });

    const savedAdmin = await newAdmin.save();

    res.status(201).json({ admin: savedAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Admin Login
router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: admin._id, isAdmin: true }, 'admin_secret_key', {
      expiresIn: '1d',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Admin Middleware
const isAdmin = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'admin_secret_key');
  
      if (decodedToken.isAdmin) {
        req.adminId = decodedToken.userId;
        next();
      } else {
        res.status(403).json({ error: 'Forbidden - Admin access required' });
      }
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  router.get('/admin/all-users', async (req, res) => {
    try {
      const users = await User.find({}, '-password'); // Exclude the password field
  
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // Admin Add Product
  router.post('/admin/add-product', isAdmin, async (req, res) => {
    try {
      const { name, group, colour, details,price } = req.body;
  
      const newProduct = new Product({
        name,
        group,
        colour,
        details,
        price
      });
  
      const savedProduct = await newProduct.save();
  
      res.status(201).json({ product: savedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Admin Delete Product
  router.delete('/admin/delete-product/:productId', isAdmin, async (req, res) => {
    try {
      const productId = req.params.productId;
  
      // Check if the product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Delete the product
      await Product.findByIdAndDelete(productId);
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Admin Display All Products
router.get('/admin/all-products', isAdmin, async (req, res) => {
    try {
      const products = await Product.find();
  
      res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Admin Print All Feedback
router.get('/admin/all-feedback', async (req, res) => {
    try {
      const feedback = await Feedback.find(); // Populate user information
  
      res.status(200).json({ feedback });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
