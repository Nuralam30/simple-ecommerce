import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png';
import '../header/Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser] = useContext(UserContext);
    const [userDashboard, setUserDashboard] = useState(false)
    const handleUserProfile = () =>{
        setUserDashboard(!userDashboard) 
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
                    <div className="user-btn" onClick={handleUserProfile}>
                        {
                            loggedInUser ? <img src={loggedInUser.userImage} alt="User" />
                            :
                            <FontAwesomeIcon icon={faUser} />
                        }
                    </div>
                    {
                    userDashboard &&
                    <ul className='dashboard-menu' >
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