import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from '../../images/logo.png';
import '../header/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop" className='nav-link'>Shop</Link>
                <Link to="/review" className='nav-link'>Order Review</Link>
                <Link to="/inventory" className='nav-link'>Manage Inventory</Link>
                
                <div className="cart-icon">
                    <Link to="/review" className='nav-link'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;