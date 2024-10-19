// auth.controller.js
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const errorHandler = require('../utils/error'); // Ensure the path is correct
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.json({ message: "Successful sign up" });
    } catch (error) {
        next(error);
    }
};

const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }

        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      
        const { password: _, ...rest } = validUser._doc;

        res.status(200)
            .cookie('access_token', token, { httpOnly: true })
            .json(rest);
    } catch (error) {
        next(error);
    }
};
const google =async (req,res,next)=>
{
const {email,name,googlePhotoUrl}=req.body;

 
  
try {
    const user =await User.findOne({email});
    if(user)
    {
        const token = jwt.token({id:user._id},process.env.JWT_SECRET);
        const {password,...rest} =user._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly:true,
        })
    }
    //this if the user does not exits create the user for the email  
   else{
    const generatePassword=(length=12)=>
        {
             const set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
             let password="";
             for(let i =0;i<length;i++)
             {
               const index= Math.floor(Math.random()*set.length);
               password=password+set[index];
             }
             return password;
        }
        const randompassword =generatePassword();
        const hashedPassword=bcryptjs.hashSync(randompassword,10);
        const user1=new User(
            {
                username:name,
                email,
                password:hashedPassword,
                googlePhotoUrl
        
            }
          
        )
        await user1.save();

        try {
            const user =await User.findOne({email});
            const token=jwt.token({id:user._id},process.env.JWT_SECRET);
            res.status(200).cookie('access_token',token,{
                httpOnly:true
            })
        } catch (error) {
            next(error);
            
        }
   }

} catch (error) {
    next(error);
    
}
}

module.exports = { signup, signin,google };
