import 'flowbite';
import 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import GoogleAuth from '../components/GoogleAuth';
import iridescence from '../images/iridescence.png'; 
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

const Signup = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage('Please fill out all fields');
        }
        try {
            setLoading(true);
            setErrorMessage(null);
            
            const { data } = await axios.post('/api/auth/signup', formData);
console.log(data);
            if (data.success === false) {
                setLoading(false);
                return setErrorMessage(data.message);
            }
            setLoading(false);
            navigate('/sign-in');
        } catch (err) {
            setErrorMessage(err.response?.data?.message || err.message);
            setLoading(false);
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
                            <Label>Username</Label>
                            <TextInput type="text" id="username" placeholder='' onChange={handleChange} />
                        </div>

                        <div className="mb-2 mt-2">
                            <Label>Email</Label>
                            <TextInput type="email" id="email" placeholder='xxxxxxxx@gmail.com' onChange={handleChange} />
                        </div>

                        <div className="mb-2 mt-2">
                            <Label>Password</Label>
                            <TextInput type="password" id="password" placeholder='' onChange={handleChange} />
                        </div>

                        <div className="mb-2 mt-2">
                            <Button className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' type='submit' disabled={loading}>
                                {loading ? (
                                    <>
                                        <Spinner size='sm' />
                                        <span className='pl-3'>Loading</span>
                                    </>
                                ) : 'Sign Up'}
                            </Button>
                        </div>
                        <GoogleAuth/>

                        <div className="mb-2 mt-2 flex items-center self-center flex-row">
                        
                        </div>
                    </form>

                    <div className="flex gap-2 pl-1 text-sm mt-2 font-bold">
                        <span>Existing user?</span>
                        <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
                    </div>
                    <div className="">
                        {errorMessage && (
                            <Alert className='mt-5' color='failure'>
                                {errorMessage}
                            </Alert>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
