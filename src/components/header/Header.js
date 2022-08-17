import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from '../../images/logo.png'
import '../header/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </nav>
        </div>
    );
};

export default Header;