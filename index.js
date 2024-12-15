const express= require('express');
const app = express();
const urlRouter = require('./routes/url');
const { connectMongoDb } = require('./connection');

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/url-shortner").then(() => console.log('MongoDb connected'));

//middleware
app.use(express.urlencoded({extended: false }));
app.use(express.json());

//routes
app.use('/', urlRouter);

app.listen(8001, ()=> console.log('server started'));