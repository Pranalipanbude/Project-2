# Project-2

 <!-- let collegeName = req.query.collegeName;
        if (!isValid(collegeName)) {
            return res.status(400).send({ status: false, messege: "Please provide The College Name" });
        }
        const lowerCollegeName = collegeName.toLowerCase();
        const findCollege = await collegeModel.findOne({ name: lowerCollegeName, isDeleted: false });
        if (!findCollege) {
            return res.status(400).send({
                status: false,
                message: `'${collegeName}' is not a valid college name. Please provide a valid college name to search interns details.`,
            });
            let check = findCollege._id;
            let name = findCollege.name
            let fullName = findCollege.fullName
            let logoLink  = findCollege.logoLink

            let internDetails = await internModel.find({collegeId : check, isDeleted : false}).select({name : 1, email : 1, mobile: 1})
            if(internDetails.length === 0) {
                return res.status(400).send({msg : ""})
            }
            else {
                let Data = {
                    name : name,
                    fullName : fullName,
                    logoLink : logoLink,
                    interest : internDetails
                };
                return res.status(200).send({
                    status: true,
                    message: `Successfully fetched all interns details of ${fullName}`,
                    data: Data,
                });
            }
    } 
}
    
    catch (err) {
        console.log(err)
       return res.status(500).send({status : false, msg: "error", err: err.message })
    }
} -->
