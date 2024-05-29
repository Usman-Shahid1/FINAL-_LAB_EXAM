const express = require('express');
const router = express.Router();
const Product = require('../models/myproduct');

// Number of products per page
const PRODUCTS_PER_PAGE = 10;

router.get('/', async (req, res) => {
  try {
    // Get the current page number from the query parameters, default to 1
    const currentPage = parseInt(req.query.page) || 1;

    // Calculate the skip value based on the current page
    const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

    // Query database to get products for the current page with pagination
    const products = await Product.find().skip(skip).limit(PRODUCTS_PER_PAGE);

                                  
         
  
    // Count total number of products
    const totalProducts = await Product.countDocuments();

    // Calculate total number of pages
    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

    res.render('index', { 
      title: 'Home', 
      products, 
      currentPage, 
      totalPages 
    });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;