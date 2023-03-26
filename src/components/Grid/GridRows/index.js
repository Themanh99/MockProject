/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './GridRows.css';

GridRows.propTypes = {

};

function GridRows({ users }) {

    return (
        <>
            {users && users.length > 0 && users.map((user, index) => {
                return (
                    <div key={index} className="grid-row-column">
                        <div className="grid-row-title">
                            <p>{user.firstName}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.lastName}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.age}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.email}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.phoneNumber}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.address}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.city}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.state}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.zipCode}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.jobTitle}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.company}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.website}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.username}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.password}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.creditCardNumber}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.creditCardIssuer}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.expirationDate}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.cvv}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.bitcoinAddress}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.routingNumber}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.favoriteColor}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.favoriteFood}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.favoriteMovie}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.favoriteBook}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.favoriteSong}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.favoriteSport}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.favoriteAnimal}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.favoriteQuote}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.aboutMe}</p>
                        </div>
                        <div className="grid-row-title">
                            <p>{user.hobbies}</p>
                        </div>
                    </div>
                );
            })
            }
        </>
    );
}

export default GridRows;