const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

const historyRouter = require('./API/searchHistoryRoute');


const cors = require('cors');
const app = express();

app.use(express.json());

const port = process.env.PORT || "9000";

mongoose.connect(process.env.mongoURl)
.then(()=>{
  console.log("MongoDB is now connected!")
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));

app.use(cors({origin: "http://localhost:3000"}));

app.use('/addSearchItem', historyRouter);

