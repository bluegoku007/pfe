const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    prix:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    quantite:{
        type:Number,
    }
})

module.exports = mongoose.model("service",serviceSchema);