const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
// for casbin
const rbac = require('./routes/rbac');

// bring in routes
// const postRoutes = require('./routes/post');
// const {getPosts} = require('./routes/post');
const postRoutes = require('./routes/post');
const rbacRoutes = require('./routes/rbac');

// const myOwnMiddleware = (req, res, next) => {
//     console.log('middleware applied');
//     //ensure that app doesn't get stuck here
//     next();
// }

// middleware
app.use(morgan('dev'));
// app.use(myOwnMiddleware);

// app.get("/", postRoutes.getPosts);
// middleware can be passed in to redirect to login page, etc.)
// app.get("/", getPosts);
app.use(bodyParser.json());
app.use("/", postRoutes);
app.use(expressValidator());
app.use("/", rbacRoutes);

const port = 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});

dotenv.config()
 
// if local installation of db
// MONGO_URI=mongodb://localhost/node_starter

// db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

// casbin
// if ((await addEnforcer.enforce(sub, obj, act)) === true) {
//       // permit alice to read data1
//   } else {
//       // deny the request, show an error
//   };
