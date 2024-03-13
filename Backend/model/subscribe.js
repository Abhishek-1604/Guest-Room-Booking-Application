const mongoose = require("mongoose")

const subSchema = mongoose.Schema({

    subscribe : {
        type: String,
        required:true
        
    }
    
},
{
    timestamp:true
}
)

const subscribeModel = mongoose.model('subscribe', subSchema)

module.exports = subscribeModel

