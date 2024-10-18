const express=require("express");
const {addmember,sendmembers} =require("../controllers/addmember.conroller.js")
const router =express.Router();
router.post("/new",addmember);
router.get("/view",sendmembers);
module.exports=router;
