import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {

        const getConversations = async () => {
            setLoading(true);

            try {
                const res = await axios.get("/api/users");
                const data = res.data;

                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false)
            }
        }

        getConversations();
    }, []);

    return {loading, conversations};
}

export default useGetConversations