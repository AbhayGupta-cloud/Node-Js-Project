const express=require('express')

const routes=express.Router();
const Detail=require("../models/Detail");
const Service=require("../models/Service");
const Slider = require('../models/Slider');
const Contact=require("../models/Contact")
routes.get("/",async (req,res)=>{
  const details= await Detail.findOne({"_id":"63b9a0a6bb708f143cee9977"})
  const slides= await Slider.find()
//   console.log(slides)
//   console.log(details)
    res.render("index",{
        details:details,
        slides:slides,
        services:Service
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

routes.post("/process-contact-form",async (request,response)=>{
    console.log("This form is submitted");
    console.log(request.body);
    //save the data to db
    try{
        const data=await Contact.create(request.body);
        console.log(data);
        response.redirect("/")
    }catch(e){
        console.log(e);
        response.redirect("/")
    }
})

module.exports=routes;