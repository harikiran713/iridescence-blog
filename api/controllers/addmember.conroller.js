const Member=require("../models/member.model.js");
const addmember = async(req,res,next)=>
{
    const {name,year,role, photoUrl,socialmedialink,department}=req.body;
    const member = new Member({
        name,year,role,photoUrl,socialmedialink,department
    })
    try{
        await member.save();
        res.json({message:"the new member is added sucessfull"})
    }
    catch(error)
    {
        next(error);
    }
   


}
const sendmembers=async(req,res,next)=>
{
    try {
        const  totalmembers = await Member.find();
    res.json(totalmembers);
    } catch (error) {
        next(error);
    }
   

}
module.exports={addmember,sendmembers};