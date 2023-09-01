const { check } = require("express-validator");

let studentValidator = [
    
    check('name',"name is required").notEmpty(),

    check('surname',"surname is required").notEmpty()
  ]

  exports.studentValidator= studentValidator;