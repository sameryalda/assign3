const express = require('express');

const path = require("path");

const rootDir = require('../util/path')

const Router = express.Router();

const products = [];

Router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
});

Router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/')
});

exports.routes = Router;
exports.products = products;