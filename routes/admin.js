const path = require('path');

const express = require('express');


const router = express.Router();

const productController = require('../controller/products')

router.get('/get-products', productController.getProducts);

router.post('/add-product', productController.postProducts);

router.post('/del', productController.deleteProducts);

router.get('/get-product', productController.getProduct);

module.exports = router;
