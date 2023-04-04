import React, { useContext } from 'react';
import GridColumn from './GridColumns';
import GridRows from './GridRows';
import Loader from '../Loader/Loader';
import ButtonTop from '../ButtonTop';
import {UserContext} from '../../context/UserContext'

function GridComponent() {
    const context = useContext(UserContext);
   
    return (
        <div style={{width:'fit-content'}}>
            <h1>Grid virtual</h1>
            <GridColumn />
            <div className="grid-rows">
                <GridRows />
            </div>
            {context.loading && <Loader />}
            <ButtonTop />
        </div>
    );
}

export default GridComponent;