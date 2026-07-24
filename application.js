const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({

    candidate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job",
        required:true
    },

    resume:{
        type:String,
        required:true
    },

    coverLetter:{
        type:String
    }

},{timestamps:true});

module.exports = mongoose.model("Application",applicationSchema);