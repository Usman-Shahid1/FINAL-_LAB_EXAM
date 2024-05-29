const express = require('express');
const router = express.Router();
const Product = require('../models/myproduct');
const checkAuth = require('../middlewares/check-auth'); // Assuming you have an authentication middleware

router.get('/', checkAuth, async (req, res) => {
  const cart = req.cookies.cart || [];
  const products = await Product.find({ _id: { $in: cart } });

  res.render('cart', { title: 'Your Cart', products });
});

module.exports = router;