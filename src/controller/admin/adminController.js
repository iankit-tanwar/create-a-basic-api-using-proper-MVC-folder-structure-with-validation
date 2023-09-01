const { validationResult } = require("express-validator");
const { StudentsSchema } = require("../../model/studentsSchema");




let adminController = (req, res) => {

    const StudentsData = new StudentsSchema({ name: req.query.name,surname:req.query.surname });

    const errors = validationResult(req);
     if (errors.isEmpty()) {
        StudentsData.save().then((d) => {
            res.status(200).json({
                msg: "Data Insert Succussfully"
            })
        }).catch((e) => {
            res.status(503).json({
                msg: "Error"
            })
        })
    }else{
         res.status(503).json({
            msg: "Validator Error",
            errors: errors.array()
        })
    }






    
   

}

exports.adminController = adminController;