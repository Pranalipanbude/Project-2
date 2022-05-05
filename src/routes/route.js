const express = require('express');
const router = express.Router();






const collegeController =require("../controllers/collegeController")
const internController = require("../controllers/internController")






//API

router.post("/functionup/collage",collegeController.createCollage)
router.post("/functionup/interns",internController.createIntern)
router.get("/functionup/interns",internController.getInters)







module.exports = router;