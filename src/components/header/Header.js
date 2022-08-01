import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="./shop">Shop</a>
                <a href="./order">Order Review</a>
                <a href="./manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default header;