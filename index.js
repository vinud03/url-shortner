const express= require('express');
const app = express();
const urlRouter = require('./routes/url');
const { connectMongoDb } = require('./connection');
const path = require('path');
const staticRouter = require('./routes/viewRouter');

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/url-shortner").then(() => console.log('MongoDb connected'));

//set views
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//middleware
app.use(express.urlencoded({extended: false }));
app.use(express.json());

//routes
app.use('/url', urlRouter);
app.use('/', staticRouter);

app.listen(8001, ()=> console.log('server started'));