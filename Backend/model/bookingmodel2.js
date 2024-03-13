const mongoose = require("mongoose");

const bookingSchema2 = mongoose.Schema({
    
  
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

   const bookingModel2  = mongoose.model('booking2',bookingSchema2)

   module.exports = bookingModel2

