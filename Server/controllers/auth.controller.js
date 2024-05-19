import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookies from "../utils/generateJwtToken.js";
// import jwt from 'jsonwebtoken';

export const signup = async(req, res)=>{
    try {
        const { fullName, userName, password, confPassword, gender, profilePic } = req.body;

        if(password !== confPassword){
            return res.status(400).json({error: "passwords doesn't match"});
        }

        const user = await User.findOne({userName});
        if(user) return res.status(400).json({error: "User already exists"});

        //Password Hashing
        const salt = await bcrypt.genSalt(10);  //as the number increases the hashing will be more complex and takes more time
        const hassedPassword = await bcrypt.hash(password, salt);

        const boypic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlpic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password: hassedPassword,
            gender,
            profilePic: gender === "male" ? boypic : girlpic,
        })

        if(newUser){
            //Generating JWT token
            generateTokenAndSetCookies(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            })
        }else {
            res.status(400).json({error: "Invalid data input"});
        }

    } catch (error) {
        console.log("Error in signup controller: ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
}

export const login = async (req, res)=>{
    try {
        const {userName, password} = req.body;

        const user = await User.findOne({userName});
        const isPassword = await bcrypt.compare(password, user.password);                                

        if(!user || !isPassword){
            return res.send(400).json({error: "Incorrect username or password"});
        }

        generateTokenAndSetCookies(user._id, res)

        console.log("You have logged in");
        res.status(200).send({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            gender: user.gender,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log("Error in login controller: ", error.message);
        res.status(500).send({error: "Internal server error"});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message: "You have been logged out"});
    } catch (error) {
        console.log("Error in logout controller: ", error.message);
        res.status(500).send({error: "Internal server error"});
    }
}