const mongoose =require("mongoose");
const memberSchema =new mongoose.Schema({
    name:
    {
        type:String,
        required:true

    },year:
    {
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    department:
    {
        type:String,
        required:true
    },
    photoUrl:
    {
        type:String,
        required:true
    },
    socialmedialink:
    {
type:String,
required:true
    }
    
});
const Member=mongoose.model("Member",memberSchema);
module.exports=Member;
