
import { TextInput,Button,Label,Datepicker,FileInput } from "flowbite-react";
import { useState } from "react";

const AddEvents = (e) => {
    const [formdata,setformdata]=useState({});
    const handledata =()=>
    {
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const handlethumbanail =()=>
    {

    }
    const handledate =()=>
    {
        setformdata({...formdata,[e.target.name]:e.target.value.toDateString()})
    }
   
    

    return (
        <div >
            <div>
                <form action="">
                    <Label>Event Name </Label>
                <TextInput placeholder="Event name" name="event name" onChange={handledata}/>
                <Label>Drive link</Label>
                <TextInput name="drive link"  onChange={handledata}/>
                <Label>Event Date</Label>
                <Datepicker name="event date"  onChange={ handledate}/>
                
                <Label> Thumbnail</Label>
                <FileInput name="thumbnail" onChange={handlethumbanail}/>
                <Button  className="" type="submit">Add Event</Button>



                </form>
            </div>
           
        </div>
    );
};

export default AddEvents;