const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Define Schema
const imageSchema = new mongoose.Schema({
  name: String,
  path: String
});

const Image = mongoose.model('Image', imageSchema);

// Multer setup for file uploads
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
