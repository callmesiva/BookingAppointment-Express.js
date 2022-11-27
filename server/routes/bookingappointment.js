const express = require('express');
const route = express.Router();

const bookingControl = require("../controllers/bookingcontroller");

route.get("/",bookingControl.view);
route.post("/",bookingControl.save);
route.get("/:id",bookingControl.editpage);
route.get("/delete/:id",bookingControl.delete);

module.exports=route;