import { useState,createContext, useEffect } from "react";
import * as userServices from '../services/userServices';

const UserContext = createContext();

function UserProvider({children}) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);


    const getUsers = async () => {
        const result = await userServices.getAllUsers(page, 100);
        setData((prev) => [...prev, ...result]);
        setLoading(false);
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1
            >= document.documentElement.scrollHeight) {
            setLoading(true);
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const contextData = {
        data,
        loading
    }

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}