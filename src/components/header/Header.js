import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import '../header/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const [dashboard, setDashboard] = useState({
        isShown : false,
        display : ''
    });
    const handleUserProfile = () =>{
        if(dashboard.isShown){
            const newdashboard = {...dashboard}
            newdashboard.display = 'block';
            newdashboard.isShown = false;
            setDashboard(newdashboard)
        }
        if(!dashboard.isShown){
            const newdashboard = {...dashboard}
            newdashboard.display = '';
            newdashboard.isShown = true;
            setDashboard(newdashboard)
        }
    }
    
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

                <div className="user-dashboard">
                    <div className="user-btn">
                        <FontAwesomeIcon onClick={handleUserProfile} icon={faUser} />
                    </div>
                    {
                    <ul className='dashboard-menu' style={dashboard}>
                        <li>Profile</li>
                        <li>Log Out</li>
                    </ul>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;