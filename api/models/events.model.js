const mongoose=require("mongoose");
const eventSchema = mongoose.Schema(
    {
        eventName:
        {
            type:String,
            required:true
        },
        driveLink:
        {
            type:String,
            required:true
        },
        eventDate:
        {
            type:String,
            required:true
        },
        thumbnail:
        {
            type:String,
            required:true
        }
    }
)
const event =mongoose.model("event",eventSchema);
module.exports=event;