import React from 'react';

function Cells({ data, length }) {
    const newData = data.slice(1);
    return (
        <>
            {newData && length > 0 && newData.map((value, index) => {
                return (
                    <div key={index} className="grid-row-title">
                        <span>{value}</span>
                    </div>
                )
            })}
        </>
    );
}

export default Cells;