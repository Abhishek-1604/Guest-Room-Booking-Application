const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    
    roomnumber:{
        type:Number,
        required:true
    },
    floorsize:{
        type:String,
        required:true
    },
    numberofbeds:{
        type:Number,
        required:true
    },
    amenities:{
        type:String,
        required:true
    } ,
    image:{
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
    },
    image1:{
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
    },
    image2:{
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
    },
    image3:{
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
    },
    description:{
        type:String,
    
    }
    
    
   },   {
        timestamp:true,
   } )

   const roomModel  = mongoose.model('rooms',roomSchema)

   module.exports = roomModel