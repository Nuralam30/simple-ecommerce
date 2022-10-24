import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import '../header/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import defaultUser from '../../images/user.png';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userDashboard, setUserDashboard] = useState(false);
    const navigate = useNavigate();

    const toggleDashboard = () =>{
        setUserDashboard(!userDashboard);
    }
    const hideDashboard = () =>{
        setUserDashboard(false)
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

                <div className="user-dashboard" onMouseLeave={hideDashboard} >
                    <div className="user-btn">
                        {
                            loggedInUser.email ? 
                            <div className="userImage" onClick={toggleDashboard}>
                                {
                                    loggedInUser.userImage ? <img src={loggedInUser.userImage} alt="" />
                                    : <img src={defaultUser} alt="" />
                                } 
                            </div>
                            : <button className="login-btn" onClick={ () => navigate('/login')}> Login  </button>
                        }
                    </div>
                    
                    {
                        userDashboard && loggedInUser.email &&
                        <ul className='dashboard-menu' >
                            <li onClick={ () => navigate('/profile')}>Profile</li>
                            <li onClick={ () => setLoggedInUser({})}>Log Out</li>
                            
                        </ul>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;