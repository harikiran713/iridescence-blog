import { TextInput, Button, Label, Datepicker, FileInput } from "flowbite-react";
import { useState } from "react";
import { app } from "../firebase.js"; 
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import axios from "axios";

const storage = getStorage(app); 

const AddEvents = () => {
  const [formData, setFormData] = useState({}); 

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleThumbnail = async (e) => {
    const file = e.target.files[0];
    if (!file) return; 

    const timestamp = Date.now(); 
    const storageRef = ref(storage, `thumbnail/${timestamp}-${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const thumbnailUrl = await getDownloadURL(storageRef);
      console.log(thumbnailUrl);
      setFormData({ ...formData, thumbnail: thumbnailUrl });
    } catch (error) {
      console.error("Error uploading thumbnail:", error);
      
    }
  };

  const handleDate = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/event/new", formData);
      console.log(res); 
    } catch (error) {
      console.error("Error adding event:", error);
      
    }
  };

  return (
    <div className="flex justify-center mt-[350px]">
      <div className="w-2/3 sm:w-1/2 md:w-[400px]">
        <form onSubmit={handleForm}>
          <Label>Event Name</Label>
          <TextInput placeholder="Event name" name="eventName" onChange={handleData} />

          <Label>Drive Link</Label>
          <TextInput name="driveLink" onChange={handleData} />

          <Label>Event Date</Label>
          <Datepicker name="eventDate" onChange={handleDate} />

          <Label>Thumbnail</Label>
          <FileInput name="thumbnail" onChange={handleThumbnail} />

          <Button type="submit">Add Event</Button>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;