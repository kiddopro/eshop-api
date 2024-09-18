const express = require("express");
const router = express.Router();
const products = require("../data/products");

//definimos las rutas
router.get('/products', (req, res) => {
  res.send(products);
});

router.get('/products/man', (req, res) => {
  res.send(products.man);
});

router.get('/products/woman', (req, res) => {
  res.send(products.woman);
});

// exportamos el router con las rutas
module.exports = router;
