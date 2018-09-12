require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const indexRoute = require('./routes/indexRoute');
const userRoute = require('./routes/userRoute');
const itemRoute = require('./routes/itemRoute');
const transactionRoute = require('./routes/transactionRoute');
const categoryRoute = require('./routes/categoryRoute');

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/items', itemRoute);
app.use('/transactions', transactionRoute);
app.use('/categories', categoryRoute);

mlabUsername = process.env.MLAB_USERNAME;
mlabPassword = process.env.MLAB_PASSWORD;

mongoose.connect(`mongodb://${mlabUsername}:${mlabPassword}@ds245532.mlab.com:45532/e-commerce`, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected e-commerce db!`);
});

app.listen(3000, () => {
  console.log('listening on port 3000!')
})