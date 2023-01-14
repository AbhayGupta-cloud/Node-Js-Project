const { response } = require("express");
const express=require("express")
const hbs=require("hbs")
const app=express();
const mongoose=require("mongoose")
const bodyParser=require('body-parser')
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")

app.use(bodyParser.urlencoded({
    extended:true
}))

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
    // Service.create([
    //     {
    //     icon:'fa-solid fa-user-secret',
    //     title:'Provide Best Courses',
    //     description:'We provide courses that help in learning and grabbing your dream offer from your dream company.',
    //     linkText:'https://www.udemy.com',
    //     link:'Checked',
    //     },
    //     {
    //         icon:'fa-brands fa-wpforms',
    //     title:'Learn every aspect of coding.',
    //     description:'We provide end to end explanation of each and every data structure in detail with examples.',
    //     linkText:'https://www.udemy.com',
    //     link:'Checked',
    //     },
    //     {
    //         icon:'fa-brands fa-atlassian',
    //     title:'Learn every aspect of coding.',
    //     description:'We provide end to end explanation of each and every Front-End and Back-End technologies.',
    //     linkText:'https://www.udemy.com',
    //     link:'Checked',
    //     }
    // ]
    
    // )


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