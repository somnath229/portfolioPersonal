const express = require('express')
const app = express();
const path = require('path')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 80; 

//connecting to database
// mongoose.connect('mongodb://localhost/contact_review',{useNewUrlParser : true});

// //define schema
// var contactSchema = new mongoose.Schema({
//     name : String,
//     email : String,
//     number : String, 
//     message : String  
// });
// var contactus = mongoose.model('contact' , contactSchema) 
 
//giving permision to serve static file 
app.use(express.static(__dirname)); //from this(present) directory
app.use(express.static("public"));  //to this directory
 
//for data entered in form to access
app.use(express.urlencoded())     

//app get
app.get('/' ,(req,res)=>{    
    res.sendFile(path.join(__dirname+'/static/index.html'))  
}); 
// app.get('/about' ,(req,res)=>{
//     res.sendFile(path.join(__dirname+'/static/about.html')) 
// });   
app.get('/blog' ,(req,res)=>{
    res.sendFile(path.join(__dirname+'/static/blog.html'))
});
app.get('/contact' ,(req,res)=>{
    res.sendFile(path.join(__dirname+'/static/contactus.html'))
}); 

// //app post for contact us
// app.post('/' ,(req,res)=>{
//     var data = new contactus(req.body);
//     data.save();
//     const param = {'message':'data saved successfully'}   
//     res.sendFile(path.join(__dirname+'/static/contactus.html'),param)
// });
 
//app listen
// app.listen(port , ()=>{
//     console.log(`this is rendering`) 
// })         
app.listen(process.env.PORT);   