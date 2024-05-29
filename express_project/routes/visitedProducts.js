const express = require('express');
const router = express.Router();
const Product = require('../models/myproduct');

router.get('/visited-products', (req, res) => {
  const visitedProductIds = req.session.visitedProducts || [];
  Product.find({ _id: { $in: visitedProductIds } })
    .then(products => {
      res.render('visitedProducts', { title: 'Visited Products', products });
    })
    .catch(err => {
      res.status(500).send('Error loading visited products');
    });
});

module.exports = router;