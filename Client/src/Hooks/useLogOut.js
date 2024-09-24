import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const useLogOut = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async() => {
        setLoading(true);

        try {
            const res = await axios.post('api/auth/logout', {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = res.data;
            
            if(data.error) throw new Error(data.error);

            localStorage.removeItem("chat-user");
            setAuthUser(null);
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
}

export default useLogOut