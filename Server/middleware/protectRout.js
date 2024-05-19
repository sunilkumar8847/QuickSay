import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'

const protectRout = async(req, res, next) => {

    try {
        const token = req.cookies.jwt
        if(!token){
            return res.status(401).json({error: "Unauthorzed Acess - no token available"})
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) return res.status(401).json({error: "Unauthorized Acess - invalid token"});
    
        const user = await User.findById(decoded.userId).select("-password");
    
        if(!user) return res.status(424).json({error: "User not found"});

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protection ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}    

export default protectRout;