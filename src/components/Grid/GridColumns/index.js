/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './GridColumns.css';

GridColumn.propTypes = {

};

function GridColumn() {
    const ArrTitle = [
        "firstName",
        "lastName",
        "age",
        "email",
        "phonenumber",
        "address",
        "city",
        "state",
        "zipcode",
        "jobtitle",
        "company",
        "website",
        "username",
        "password",
        "creditCardNumber",
        "creditCardIssuer",
        "expirationDate",
        "cvv",
        "bitcoinAddress",
        "routingNumber",
        "favoriteColor",
        "favoriteFood",
        "favoriteMovie",
        "favoriteBook",
        "favoriteSong",
        "favoriteSport",
        "favoriteAnimal",
        "favoriteQuote",
        "aboutMe",
        "hobbies"
    ];

    return (
        <div className="grid-column">
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

export default GridColumn;