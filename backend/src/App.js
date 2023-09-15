const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');
const app = express();

app.use(express.json());

const port = process.env.PORT || "9000";

console.log(process.env.mongoURl)
mongoose.connect(process.env.mongoURl)
.then(()=>{
  console.log("MongoDB is now connected!")
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));

app.use(cors())

//common routes
// app.post('/signup', signup);
// app.post('/login', login)
// app.get('/logout',requireAuth, logout);
// app.post('/adminLogin', adminLogin)
// app.get('/search/:searchkey', search)