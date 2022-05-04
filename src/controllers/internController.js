const collegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");

const isValid = function (value) {
    if (typeof value === 'undefined' || value == null) return false
    if (typeof value === 'string' && value.trim().length == 0) return false
    return true;
}

const createIntern = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "Bad Request" })
        } else {

            const { name, email, mobile, collegeId, } = data

            if (!isValid(name)) {
                return res.status(400).send({ status: false, msg: "Name is required" })
            }

            if (!isValid(email)) {
                return res.status(400).send({ status: false, msg: "Email is required" })
            }

            if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return res.status(400).send({ status: false, msg: "please enter a valid email" })
            }


            if (!isValid(mobile)) {
                return res.status(400).send({ status: false, msg: "Mobile number is required" })
        
            
            }
            if (!isValid(collegeId)) {
                return res.status(400).send({ status: false, msg: "collegeId is required" })
            }

            let saveData = await internModel.create(data)
            return res.status(201).send({ status: true, msg: saveData })
        }


    }

    catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, msg: "error", error: error.message })

    }
}


// const GetData = async function(req, res){
//     let data = re

// }








module.exports.createIntern=createIntern