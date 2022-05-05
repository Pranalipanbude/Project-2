
const collegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");

const isValid = function (value) {
    if (typeof value === 'undefined' || value == null) return false
    if (typeof value === 'string' && value.trim().length == 0) return false
    return true;
}

const createCollage = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "Bad Request" })
        } else {

            const { name, fullName, logoLink } = data

            if (!isValid(name)) {
                return res.status(400).send({ status: false, msg: "name is required" })
            }

            if (!isValid(fullName)) {
                return res.status(400).send({ status: false, msg: "fullName is required" })
            }

            if (!isValid(logoLink)) {
                return res.status(400).send({ status: false, msg: "logoLink is required" })
            }
            let saveData = await collegeModel.create(data)
            return res.status(201).send({ status: true, msg: saveData })

        }

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, msg: "error", error: error.message })

    }
}








module.exports.createCollage = createCollage 
