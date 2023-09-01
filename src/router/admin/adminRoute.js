
const express = require("express");
const { adminController } = require("../../controller/admin/adminController");

const { studentValidator } = require("../../validator/studentValidator");

const adminRoute = express("router")


adminRoute.get('/student',studentValidator,adminController)


exports.adminRoute= adminRoute;