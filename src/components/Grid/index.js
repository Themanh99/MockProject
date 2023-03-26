import React, { useEffect, useState } from 'react';
import GridColumn from './GridColumns';
import * as userServices from '../../services/userServices';
import GridRows from './GridRows';
import Loader from '../Loader/Loader';
// import PropTypes from 'prop-types';

GridComponent.propTypes = {

};

function GridComponent(props) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        const result = await userServices.getAllUsers(page, 15);
        setData((prev) => [...prev, ...result]);
        setLoading(false);
    };
    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1
            >= document.documentElement.scrollHeight) {
            setLoading(true);
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        // lăn chuột kéo thêm api là lazy - loading , pagination 
        <div>
            <h1>Grid virtual</h1>
            <GridColumn />
            <div className="grid-rows">
                <GridRows users={data} />
            </div>
            <Loader />
        </div>
    );
}

export default GridComponent;