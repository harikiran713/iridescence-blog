const express=require("express");
const router=express.Router();
const {addNewEvent,viewEvents}=require("../controllers/event.controller.js");
router.post("/new",addNewEvent);
router.get("/view",viewEvents);
module.exports=router;