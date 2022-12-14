const path = require("path");

const express = require('express');
const bodyParser = require('body-parser');

const shopRoutes = require('./routes/shop')
const adminData = require("./routes/admin");


const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found'});
})

app.listen(3000);
console.log('Server listening on http://localhost:3000');

