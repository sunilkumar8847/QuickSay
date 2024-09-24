import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAuthContext } from "../Context/AuthContext";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const {setAuthUser} = useAuthContext();
    
    const signup = async (fullName, userName, password, confPassword, gender) => {
        const sucess = handleInputerrors(fullName, userName, password, confPassword, gender);
        if(!sucess) return;

        setLoading(true);
        try {
            const res = await axios.post("/api/auth/signup",{
                fullName,
                userName,
                password,
                confPassword,
                gender},{
                    headers: {
                        "Content-Type": "application/json"
                    }
            });

            const data = res.data;
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    return {loading, signup}
}

export default useSignUp;


const handleInputerrors = (fullName, userName, password, confPassword, gender) => {
    if(!fullName || !userName || !password || !confPassword || !gender){
        toast.error("Please fill in all the fields");
        return false;
    }

    if(password !== confPassword){
        toast.error("Passwords do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}