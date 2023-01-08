const express=require('express')

const routes=express.Router();
const Detail=require("../models/Detail");
const Slider = require('../models/Slider');
routes.get("/",async (req,res)=>{
  const details= await Detail.findOne({"_id":"63b9a0a6bb708f143cee9977"})
  const slides= await Slider.find()
//   console.log(slides)
//   console.log(details)
    res.render("index",{
        details:details,
        slides:slides
    })
})

routes.get("/",(req,res)=>{
    res.send("This is message from routes")
});
routes.get('/gallery',async (req,res)=>{
    const details= await Detail.findOne({"_id":"63b9a0a6bb708f143cee9977"})
    res.render("gallery",{
        details:details,
    })
})
module.exports=routes