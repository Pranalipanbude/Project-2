const mongoose = require('mongoose')
const moment = require('moment')

let date = moment().format('DD/MM/YYYY');
console.log(date)


const ObjectId = mongoose.Schema.Types.ObjectId


const internSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, "name is required"],
        trim: true
    },
    "email": {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: "please enter a valid email"
        }


    },
    "mobile": {
        type: Number,
        unique: true,
        validator: function (mobile) {
            return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile);
        }

    },
    "collegeId": {
        type: ObjectId,
        ref: "college",
        required: true

    },
    "isDeleted": {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Intern", internSchema)