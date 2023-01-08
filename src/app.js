const { response } = require("express");
const express=require("express")
const hbs=require("hbs")
const app=express();
const mongoose=require("mongoose")
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
app.use('/static',express.static("public"))
app.use('',routes)
//(template engine)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")
//db connection
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/website_tut",()=>{
    console.log("db connected")
    // Slider.create([
    //     {
    //         title:'Learn Java with fun',
    //         subTitle:'Java is one of the most complex programming language',
    //         imageUrl:'/static/images/s1.png'
    //     },
    //     {
    //         title:'What is Django in Python',
    //         subTitle:'Django is a Framework used to develop web applications using python programming language',
    //         imageUrl:'/static/images/s2.png'
    //     },
    //     {
    //         title:'What is NodeJs?',
    //         subTitle:'Node Js is runtime environment to execute javascript outside browser.',
    //         imageUrl:'/static/images/s3.png'
    //     },
    // ])


    // Detail.create({
    //     brandName:"Abhay Technical Solutions",
    //     brandIconUrl:"https:/",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact US",
    //             url:"/contact-us"
    //         }
    //     ]
    // })
})
app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
})