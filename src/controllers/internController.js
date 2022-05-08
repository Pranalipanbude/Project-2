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

            if (! /^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile)) {
                return res.status(400).send({ status: false, msg: "please enter a valid mobile number" })
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



const getDetails = async function (req, res) {
    try {
        let body = req.query;

        if (!isValid(body)) {
            return res.status(400).send({
                status: false,
                message: "Query not found, Please provide a query",
            });
        }
        let collegeName = req.query.name
        if (!collegeName) return res.status(400).send({ status: false, msg: "Please give the college name" })
        if (!isValid(collegeName)) {
            return res.status(400).send({ status: false, msg: "Give the valid college name, College name is not in the list" })
        }
        let small = collegeName.toLowerCase()                          
        let getCollege = await collegeModel.findOne({ name: small, isDeleted: false })
        if (!getCollege) {
            return res.status(400).send({ status: false, msg: "Not a valid college" })
        }
        let checkId = getCollege._id
        let name1 = getCollege.name
        let fullName1 = getCollege.fullName
        let logoLink1 = getCollege.logoLink

        const totalIntern = await internModel.find({ collegeId: checkId, isDeleted: false }).select({ _id: 1, name: 1, email: 1, mobile: 1 });
        if (totalIntern.length != 0) {
            let Data = {
                name: name1,
                fullName: fullName1,
                logoLink: logoLink1,
                interests: totalIntern
            }
            return res.status(200).send({ status: true, data: Data });
        }
        else {
            res.status(400).send({ status: false, msg: "Bad Request" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: "error", err: err.message })
    }


}

























module.exports.createIntern = createIntern
module.exports.getDetails = getDetails