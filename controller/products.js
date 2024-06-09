const products = require('../model/productModel');

exports.getProducts = (req, res, next) => {
    product.fetchAll()
    .then(([rows, fields]) =>
       { res.status(200).json(rows)})
    .catch(err =>{
        res.status(400).console.log(err);
    })
};

exports.postProducts = (req, res, next) => {
    const {title, price} = req.body;
    products.create({
        title : title,
        price : price
    })
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
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

