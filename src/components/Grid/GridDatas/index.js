import React from 'react';
// import PropTypes from 'prop-types';

GridRows.propTypes = {

};

function GridRows({ data }) {
    const ArrTitle = [...data];
    return (
        <div className="grid-rows">
            {ArrTitle.map((item, index) => {
                return (
                    <div key={index} className="grid-column-title">
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default GridRows;