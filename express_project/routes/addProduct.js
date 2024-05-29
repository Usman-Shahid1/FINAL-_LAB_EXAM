/*const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/myproduct');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle form submission
router.post('/api/addProduct', upload.single('image'), async (req, res) => {
    const { name, description, price } = req.body;
    const image = req.file.filename;
  
    const newProduct = new Product({ name, description, price, image });
  
    try {
      await newProduct.save();
      res.status(201).json({ success: true, message: 'Product added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error adding product' });
    }
  });

module.exports = router; */
// const multer = require('multer');

// const express = require('express');
// const router = express.Router();
// const Product = require('../models/myproduct');



// // Handle form submission
// router.post('/api/addProduct', async (req, res) => {
//   const { name, description, price } = req.body;

//   const newProduct = new Product({ name, description, price });

//   try {
//     await newProduct.save();
//     res.status(201).send('Product added successfully');
//   } catch (error) {
//     res.status(500).send('Error');
//   }
// });

// module.exports = router;







const express = require('express');
const router = express.Router();
const Product = require('../models/myproduct');

router.post('/api/addProduct', async (req, res) => {
  const { name, description, price, category, isFeatured } = req.body;

  // Create a new product instance with the provided data
  const newProduct = new Product({
    name,
    description,
    price,
    category,
    isFeatured: isFeatured ? true : false // Convert isFeatured to a boolean
  });

  try {
    // Save the new product to the database
    await newProduct.save();
    res.status(201).send('Product added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding product');
  }
});

module.exports = router;
