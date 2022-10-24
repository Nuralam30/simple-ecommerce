import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import '../header/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import userImg from '../../images/cv.jpg';

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
                        {/* <button className="login-btn" onClick={toggleDashboard}> Login</button> */}
                        <div className="userImage"><img src={userImg} alt="" /></div>
                    </div>
                    
                    {
                    userDashboard &&
                    <ul className='dashboard-menu' >
                        {
                            loggedInUser.email && <li>Profile</li>
                        }
                        {
                            loggedInUser.email ? <li onClick={ () => setLoggedInUser({})}>Log Out</li>
                            : <li onClick={ () => navigate('/login')}>Log In</li>
                        }
                    </ul>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;