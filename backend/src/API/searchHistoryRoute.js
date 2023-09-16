const express = require("express");
const history = require('../Models/searchResultSchema');

const historyRouter = express.Router();

historyRouter.post("/addSearchItem",
async function(req,res){
    const {valid,number,local_format,international_format,country_prefix,country_code,country_name,location,carrier,line_type} = req.body
    
    try{

      await history.create({valid:valid, number: number, local_format: local_format, international_format: international_format, country_prefix: country_prefix, country_code: country_code, country_name: country_name, location: "location", carrier: carrier, line_type: line_type
      });
      console.log("Done ya bashaaa")
    return res.status(200).json({msg: "User Added"});
    }
    catch(error)
    {
      console.log(error)
      return res.status(400).json({msg: "User Name Already Taken"});
    }
 });

 historyRouter.get("/getHistory",async(req, res) => {
    const result = await history.find({})
    res.send(result);
  });

module.exports = historyRouter;