//itsus5220,4linzRYHdtFoiOrg
// mongodb+srv://itsus5220:4linzRYHdtFoiOrg@uni-ecom.6uow5ui.mongodb.net/?retryWrites=true&w=majority&appName=uni-ecom

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
// const productsRouter = require('./routes/products');
// const Product = require('./models/myproduct');
const productRoutes = require('./routes/products');

const Router=require("./routes/products.js")
// Connect to MongoDB
 mongoose.connect("mongodb+srv://itsus5220:4linzRYHdtFoiOrg@uni-ecom.6uow5ui.mongodb.net/?retryWrites=true&w=majority&appName=uni-ecom", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({ secret: 'MySecretKey', resave: false, saveUninitialized: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', 'layouts/layout'); // Set default layout

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Homepage' });
});

app.get('/cart', (req, res) => {
  res.render('cart', { title: 'Cart' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});


app.get('/product', (req, res) => {
  Product.find().then((result=>{
    res.send(result);
  })).catch((err)=>{
    console.log(err);
  })
 
  
  res.render('products', { title: 'Products' });
  console.log(Products);
});
app.get('/addProduct', (req, res) => {
  res.render('addProduct');
});
app.post('/api/addProduct', require('./routes/addProduct'));

app.use('/api/products',productsRouter  );


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const productsRouter = require('./routes/products');
// const addProductRouter = require('./routes/addProduct');
// const expressLayouts = require('express-ejs-layouts');
// const expressSession = require('express-session');

// const visitedProductsRouter = require('./routes/visitedProducts');

// const app = express();

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://itsus5220:4linzRYHdtFoiOrg@uni-ecom.6uow5ui.mongodb.net/?retryWrites=true&w=majority&appName=uni-ecom", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(session({ secret: 'MySecretKey', resave: false, saveUninitialized: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(expressSession({ secret: 'MySecretKey', resave: false, saveUninitialized: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(expressLayouts);
// app.use(visitedProductsRouter);

// // Set the view engine to EJS
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Routes
// app.get('/', (req, res) => {
//   res.render('index');
// });
// app.use('/api', productsRouter);
// app.use('/api', addProductRouter);

// app.get('/addProduct', (req, res) => {
//   res.render('addProduct');
// });

// app.get('/products/:id', (req, res) => {
//   res.render('product');
// });

// app.get('/visited-products', (req, res) => {
//   res.render('visitedProducts');
// });

//  app.get('/cart', (req, res) => {
//    res.render('cart', { title: 'Cart' });
// });

//  app.get('/contact', (req, res) => {
//   res.render('contact', { title: 'Contact' });
//  });
// app.post('/api/addProduct', require('./routes/addProduct'));

// // Start the server
// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });