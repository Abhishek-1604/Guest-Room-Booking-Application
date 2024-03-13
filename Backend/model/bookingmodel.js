const mongoose = require("mongoose");

const bookingSchema1 = mongoose.Schema({
    
  
    checkin:{
        type:String,
        required:true
    },
    checkout:{
        type:String,
        required:true
    } ,
    username:{
        type:String,
        required:true
    } ,
    mobilenumber:{
        type:Number,
        required:true
    } ,
    rentperday:{
        type:Number,
        required:true
    } ,
    totalrent:{
        type:Number,
        required:true
    } 
    
    
   },   {
        timestamp:true,
   } )

   const bookingModel1  = mongoose.model('booking',bookingSchema1)

   module.exports = bookingModel1