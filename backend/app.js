const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const Image = require('./models/Image');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully!');
});

app.use(bodyParser.json());
app.use(cors());

app.use(adminRoutes);
app.use(userRoutes); 


app.use(express.static(__dirname));

// app.use('/images', express.static('img'));

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits:{ fileSize: 1000000 } // 1MB max file size
}).single('myImage');

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/images.html');
});

app.use(cors())
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.send(err);
    } else {
      if(req.file == undefined){
        res.send('No file selected');
      } else {
        const newImage = new Image({
          name: req.file.filename,
          path: req.file.path
        });
        newImage.save()
          .then(image => {
            res.send('Image uploaded successfully!');
          })
          .catch(err => console.log(err));
      }
    }
  });
});

app.get('/images', async (req, res) => {
    try {
      const images = await Image.find({});
      res.json(images);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch images' });
    }
  });


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
