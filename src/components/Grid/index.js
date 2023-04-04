/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import GridColumn from './GridColumns';
import * as userServices from '../../services/userServices';
import GridRows from './GridRows';
import Loader from '../Loader/Loader';
import ButtonTop from '../ButtonTop';


function GridComponent(props) {
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

    return (
        // lăn chuột kéo thêm api là lazy - loading , pagination 
        <div style={{width:'fit-content'}}>
            <h1>Grid virtual</h1>
            <GridColumn />
            <div className="grid-rows">
                <GridRows users={data} />
            </div>
            {loading && <Loader />}
            <ButtonTop />
        </div>
    );
}

export default GridComponent;