import User from "../models/user.model.js";

const getUserSidebar = async(req, res) => {
    try {
        const loggedinUser = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedinUser}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUserSidebar: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export default getUserSidebar;