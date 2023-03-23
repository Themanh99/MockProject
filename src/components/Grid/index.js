import React, { useEffect, useState } from 'react';
import GridColumn from './GridColumns';
import GridRows from './GridDatas';
// import PropTypes from 'prop-types';

GridComponent.propTypes = {

};

function GridComponent(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://mockup-api.onrender.com/api/users?_page=1&_limit=10')
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as json.
                return response.json();
            }).then(function (responseData) {
                return responseData.data;
            })
            .catch(function (error) {
                console.log('Looks like there was a problem: \n', error);
            });
    }, [])
    return (
        <div>
            <h2>Grid virtual</h2>
            <GridColumn />
            <GridRows data={data} />
        </div>
    );
}

export default GridComponent;