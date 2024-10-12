import 'flowbite';
import 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import iridescence from '../images/iridescence.png'; 
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Signin = () => {
    const [formData, setFormData] = useState({});
    const { loading, error: errorMessage } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return dispatch(signInFailure("Please fill all fields"));
        }

        try {
            dispatch(signInStart());

           
           const res =await axios.post('/api/auth/signin',formData)

           console.log(res);
            console.log(res.data);
           
            if (res.data.success === false) {
              dispatch(signInFailure(res.data.message));
            }

      
            if (res.data.username) {
              dispatch(signInSuccess(res.data));
              navigate('/');
            }
          } catch (error) {
            dispatch(signInFailure(error.message));
          }
        };
    return (
        <div className="min-h-full justify-center">
            <div className="lg:w-1/4 md:w-1/2 w-2/3 m-auto mt-18">
                <div className="flex justify-center flex-col">
                    <div className="flex self-center items-center mb-6">
                        <img src={iridescence} alt="Iridescence Icon" style={{ width: '250px', height: '220px' }} />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-2 mt-2">
                            <Label htmlFor="email">Email</Label>
                            <TextInput type="email" id="email" placeholder='xxxxxxxx@gmail.com' onChange={handleChange} />
                        </div>

                        <div className="mb-2 mt-2">
                            <Label htmlFor="password">Password</Label>
                            <TextInput type="password" id="password" placeholder='**********' onChange={handleChange} />
                        </div>

                        <div className="mb-2 mt-2">
                            <Button className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' type='submit' disabled={loading}>
                                {loading ? (
                                    <>
                                        <Spinner size='sm' />
                                        <span className='pl-3'>Loading</span>
                                    </>
                                ) : 'Sign In'}
                            </Button>
                        </div>

                        <div className="mb-2 mt-2 flex items-center self-center flex-row">
                            <Button
                                className='w-full h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white self-center' 
                                outline
                            >
                                <FaGoogle className='mr-2 mt-0.5' size={20} />
                                Continue with Google
                            </Button>
                        </div>
                    </form>

                    <div className="flex gap-2 pl-1 text-sm mt-2 font-bold">
                        <span>Start with us!!</span>
                        <Link to='/sign-up' className='text-blue-500'>Sign Up</Link>
                    </div>

                    {errorMessage && (
                        <Alert className='mt-5' color='failure'>
                            {errorMessage}
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signin;
