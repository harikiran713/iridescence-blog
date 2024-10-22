import { FileInput, Button, Label, Select, TextInput } from 'flowbite-react';
import iridescence from '../images/iridescence.png';
import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../firebase.js";
import axios from 'axios';

const storage = getStorage(app);

const AddMember = () => {
  const [formData, setFormData] = useState({});

  const photohandle = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const getCurrentDateTime = () => new Date().toLocaleString();
    const time = getCurrentDateTime();

    const storageRef = ref(storage, `photos/${file.name}+${time}`);
    try {
      await uploadBytes(storageRef, file);
      console.log('Uploaded a file successfully!');
     
      const url = await getDownloadURL(storageRef);
      console.log('File available at', url);

      setFormData(() => ({
        ...formData,
        photoUrl: url
      }));

    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const handle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setTimeout(() => {
        console.log("This message will appear after 2 seconds.");
    }, 2000); 

      const res = await axios.post("/api/members/new", formData);
      console.log("Member data (with URL):", res.data);
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  return (
    <div className=''>
      <div className='flex justify-center  mt-[200px]'>
        <img src={iridescence} alt="Iridescence Logo" className='w-48' style={{ width: '250px', height: '220px' }} />
      </div>
    <div className='flex w-full justify-center   mt-12'>
        <form onSubmit={handleSubmit} className=' lg:w-1/3 md:w-4/5 sm:w-1/2'>
          <Label>Name</Label>
          <TextInput placeholder='Enter the name' className='mb-3 ' name="name" onChange={handle} />
          
          <Label>Year</Label>
          <Select required className='mb-3' name="year" onChange={handle}>
            <option value="">Select Year</option>
            <option value="1st year">1st Year</option>
            <option value="2nd year">2nd Year</option>
            <option value="3rd year">3rd Year</option>
            <option value="4th year">4th Year</option>
          </Select>

          <Label>Department</Label>
          <Select required className='mb-3' name="department" onChange={handle}>
            <option value="">Department</option>
            <option value="ECE">ECE</option>
            <option value="CSE">CSE</option>
            <option value="DSAI">DSAI</option>
          </Select>

          <Label>Role</Label>
          <TextInput className='mb-3' placeholder='Role of the person' name='role' onChange={handle} />
          
          <Label>Social Media Link</Label>
          <TextInput className='mb-3' placeholder='Social media link' name='socialmedialink' onChange={handle} />

          <Label>Photo</Label>
          <FileInput className='mb-2' name='photoUrl' onChange={photohandle} />

          <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full' type='submit'>Add Member</Button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
