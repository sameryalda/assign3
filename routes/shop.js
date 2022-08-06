const express = require('express');

const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { prods: products, pageTitle: 'Shop', path:'/admin/shop'});
});

module.exports = Router;