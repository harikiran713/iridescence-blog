import { FaGoogle } from "react-icons/fa";
import { Button } from "flowbite-react";
import {app} from "../firebase.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice.js";

const auth = getAuth(app);

export default function GoogleAuth() {
  const provider = new GoogleAuthProvider();
  const navigate =useNavigate();


  const GoogleSign = async() => {
  
    provider.setCustomParameters({prompt:'select_account'});
    try
    {
      const GoogleRes= await signInWithPopup(auth, provider);
      console.log(GoogleRes);
     
      const res =await axios.post("/api/auth/google",{name:GoogleRes.user.displayName,email:GoogleRes.user.email,googlePhotoUrl:GoogleRes.user.photoURL});
      const data =await res.json();
      if(res.ok)
      {
        dispatchEvent(signInSuccess(data));
        navigate('/')
      }
    } 
    catch(error)
    {
console.log(error);
    }
   
      
  };

  return (
    <div>
      <Button
        onClick={GoogleSign}
        type="button"
        className="w-full h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white self-center"
        outline
      >
        <FaGoogle className="mr-2 mt-0.5" size={20} />
        Continue with Google
      </Button>
    </div>
  );
}
