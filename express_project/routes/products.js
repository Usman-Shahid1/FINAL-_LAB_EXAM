// const express = require('express');
// const router = express.Router();
// const Product = require('../models/myproduct');

// router.get('/', async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = 10;
//   const skip = (page - 1) * limit;

//   const products = await Product.find().skip(skip).limit(limit);
//   const count = await Product.countDocuments();

//   res.render('products', {
//     title: 'Products',
//     products,
//     pagination: {
//       page,
//       totalPages: Math.ceil(count / limit),
//     },
//   });
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Product = require('../models/myproduct');

// router.get('/products', async (req, res) => {
//     try {
//         // Fetch all products from the database
//         const products = await Product.find();
//         // Render the products.ejs view and pass the products data
//         res.render('products', { products: products });
//     } catch (error) {
//         // Handle errors, if any
//         console.error(error);
//         res.status(500).send('Error fetching products');
//     }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Product = require('../models/myproduct');

// router.get('/products', async (req, res) => {
//   const perPage = 5; // Number of products per page
//   const page = parseInt(req.query.page) || 1; // Current page, default to 1 if not provided

//   try {
//     const products = await Product.find()
//       .skip((perPage * page) - perPage)
//       .limit(perPage);

//     const count = await Product.countDocuments();

//     res.render('products', {
//       products,
//       current: page,
//       pages: Math.ceil(count / perPage)
//     });
//   } catch (error) {
//     res.status(500).send('Error fetching products');
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Product = require('../models/myproduct');

//GET route to fetch products
router.get('/products1', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch products from the database
      res.render('products',{products: products});
        // Send products as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products'); // Send error response if there's an issue
    }
});

module.exports = router;