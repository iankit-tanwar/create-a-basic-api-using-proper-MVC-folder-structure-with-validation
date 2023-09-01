const { mongoose } = require("../config/db");


const StudentsSchema = mongoose.model('Students', { name: String ,surname:String});


exports.StudentsSchema= StudentsSchema;
