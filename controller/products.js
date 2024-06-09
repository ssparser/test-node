const products = require('../model/productModel');
const sequelize = require('../util/database');

exports.getProducts = (req, res, next) => {
    products.fetchAll()
    .then(([rows, fields]) =>
       { res.status(200).json(rows)})
    .catch(err =>{
        res.status(400).console.log(err);
    })
};

exports.postProducts = (req, res, next) => {
    const {title, price} = req.body;

    const product = new products(title, price);
    product.save()
    .then(([row, fields]) => {
        res.status(201).json({ message: 'Product added successfully', productId: row.insertId });
    })
    .catch(err =>{
        res.status(404);
        console.log(err);
    });
};

exports.deleteProducts = (req, res, next) => {
    const id = req.body.id;
    console.log(id);
    products.deleteId(id)
    .then(([row]) => {
        res.status(200).json(row);
    })
    .catch(err =>{
        res.status(404);
        console.log(err);
    });
   
    
};

exports.getProduct = (req, res, next) => {
    const id = req.body.id;
    console.log(id);
    products.fetchProd(id)
    .then(([row]) =>
    {
        res.status(200).json(row);
    })
    .catch(err =>{
        res.status(404);
        console.log(err);
    });
   
};

