const mongoose = require('mongoose');


const collegeSchema = new mongoose.Schema({

    "name":{
        type: String,
        required: [true, "name is required"],
        unique: true,
        trim: true
    },

    "fullName":{
        type: String,
        required: [true, "fullName is required"],
        unique: true,
        trim: true

    },

    "logolink":{
        type: String,
        required: [true, "logo link is required"],
        trim: true
    },

    "isDeleted": {
        type: Boolean,
        default: false
    }
    

},{timestamps: true})

module.exports= mongoose.model("college" , collegeSchema)