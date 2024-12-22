const express= require('express');
const app = express();
const { connectMongoDb } = require('./connection');
const path = require('path');
const cookieParser = require('cookie-parser');
const {restirctToLoggedInUserOnly, checkAuth} = require('./middleware/auth');

// routes
const urlRouter = require('./routes/url');
const staticRouter = require('./routes/viewRouter');
const userRoute = require("./routes/user");

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/url-shortner").then(() => console.log('MongoDb connected'));

//set views
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//middleware
app.use(express.urlencoded({extended: false }));
app.use(cookieParser());
app.use(express.json());

//routes
app.use('/url', restirctToLoggedInUserOnly, urlRouter);
app.use('/user', userRoute);
app.use('/', checkAuth, staticRouter);

app.listen(8001, ()=> console.log('server started'));