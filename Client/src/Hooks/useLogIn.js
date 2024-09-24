import { useState } from "react"
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogIn = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logIn = async (userName, password) => {

        const sucess = handleInputError(userName, password);
        if (!sucess) return;

        setLoading(true);
        try {
            const res = await axios.post("/api/auth/login", {
                userName,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = res.data;
            if(data.error) throw new Error(data.error);

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    
    return {loading, logIn};
}

export default useLogIn;

const handleInputError = (userName, password) => {
    if (!userName || !password) {
        toast.error("Fill all the fields");
        return false
    }

    return true;
}