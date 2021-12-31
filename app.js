const express=require("express");
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const ejs=require("ejs");

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/bookingDB",{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
var i=0;
var j=0;
var k=0;
var l=0;
var m=0;
var n=0;
const bookingSchema=new mongoose.Schema({
  _id:i,
  firstname:String,
  lastname:String,
  email:String,
  mobile:Number,
  appointmentdate:Date,
  address:String,
  homeno:String,
  area:String,
  zipcode:Number
  });
  
  const requestcallbackSchema=new mongoose.Schema({
    firstname:String,
    mobileno:Number,
    email:String,
    message:String
  });
const Callback=mongoose.model("Callback",requestcallbackSchema)

const Washingmachinebooking=mongoose.model("Washingmachinebooking",bookingSchema);
const Acrepair=mongoose.model("Acrepair",bookingSchema);
const Fridgerepair=mongoose.model("Fridgerepair",bookingSchema);
const Acinstallation=mongoose.model("Acinstallation",bookingSchema);
const Dishwasherrepair=mongoose.model("Dishwasherrepair",bookingSchema);
const Ovenrepair=mongoose.model("Ovenrepair",bookingSchema);



  var d = new Date();
var currentYear = d.getFullYear(); 



app.get("/",function(req,res){
var Title="Best home appliance repair and service in hyderabad";
res.render("Home",{currentyear:currentYear,title:Title});

});
app.post("/",function(req,res){
  const item=new Callback({
    firstname:req.body.firstname,
    mobileno:req.body.mobileno,
    email:req.body.email,
    message:req.body.message
  }).save( function (err, small) {
    if (err) return handleError(err);
    // saved!
  });
});

app.get("/washingmachinerepair",function(req,res){
Postname="washingmachinebooking";
Title="best washing machine repair in hyderabad";
res.render("washingmachinerepair",{currentyear:currentYear,title:Title,postname:Postname});
});
app.post("/washingmachinebooking",function(req,res){
  const washingmachine=new Washingmachinebooking({
   _id:i++,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    mobile:req.body.mobileno,
    appointmentdate:req.body.date,
    address:req.body.address,
    homeno:req.body.homeno,
    area:req.body.area,
    zipcode:req.body.zipcode
    
    }).save();
    
});
app.get("/acrepair",function(req,res){
  Postname="acrepair"
Title="Best Ac repair in hyderabad";
res.render("acrepair",{currentyear:currentYear,title:Title,postname:Postname});
});
app.post("/acrepair",function(req,res){
  const booking=new Acrepair({
  _id:j++,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    mobile:req.body.mobileno,
    appointmentdate:req.body.date,
    address:req.body.address,
    homeno:req.body.homeno,
    area:req.body.area,
    zipcode:req.body.zipcode
    
    }).save();
  });
app.get("/refrigerator-repair",function(req,res){
  Postname="refrigeratorrepair";
Title="Best refrigerator repair in hyderabad";
res.render("fridgerepair",{currentyear:currentYear,title:Title,postname:Postname});
});
app.post("/refrigeratorrepair",function(req,res){
  const booking=new Fridgerepair({
  _id:k++,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    mobile:req.body.mobileno,
    appointmentdate:req.body.date,
    address:req.body.address,
    homeno:req.body.homeno,
    area:req.body.area,
    zipcode:req.body.zipcode
    
    }).save();
  });
app.get("/ac-installation",function(req,res){
  Postname="acinstallation";
Title="Best ac installation services in hyderabad";
res.render("ACinstallation",{currentyear:currentYear,title:Title,postname:Postname});
});
app.post("/acinstallation",function(req,res){
  const booking=new Acinstallation({
  _id:l++,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    mobile:req.body.mobileno,
    appointmentdate:req.body.date,
    address:req.body.address,
    homeno:req.body.homeno,
    area:req.body.area,
    zipcode:req.body.zipcode
    
    }).save();
  });
app.get("/dishwasher-repair",function(req,res){
  Postname="dishwasher";
Title="Best dishwasher repair in hyderabad";
res.render("dishwasher",{currentyear:currentYear,title:Title,postname:Postname});
});
app.post("/dishwasher",function(req,res){
  const booking=new Dishwasherrepair({
  _id:m++,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    mobile:req.body.mobileno,
    appointmentdate:req.body.date,
    address:req.body.address,
    homeno:req.body.homeno,
    area:req.body.area,
    zipcode:req.body.zipcode
    
    }).save();
  });
app.get("/oven-repair",function(req,res){
  Postname="ovenrepair";
Title="Best oven repair in hyderabad";
res.render("ovenrepair",{currentyear:currentYear,title:Title,postname:Postname});
});
app.post("/ovenrepair",function(req,res){
  const booking=new Ovenrepair({
  _id:n++,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    mobile:req.body.mobileno,
    appointmentdate:req.body.date,
    address:req.body.address,
    homeno:req.body.homeno,
    area:req.body.area,
    zipcode:req.body.zipcode
    
    }).save();
  });
app.listen(3000,function(){
console.log("successfully server started");
});
