const path = require('path');

const express = require('express');


const router = express.Router();

const productController = require('../controller/products')

// /admin/add-product => GET
router.get('/get-products', productController.getProducts);

// /admin/add-product => POST
router.post('/add-product', productController.postProducts);

router.post('/del', productController.deleteProducts);

router.get('/get-product', productController.getProduct);

module.exports = router;
