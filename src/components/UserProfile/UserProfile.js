import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './UserProfile.css';

const UserProfile = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className='user-profile'>
            <div className="user-about">
                {
                    loggedInUser.userImage && <div className="user-image"><img src={loggedInUser.userImage} alt="" /></div>
                }
                <br />
                <h2>{loggedInUser.name}</h2>
                <br /><br />
                {
                    loggedInUser.email && 
                    <div className="user-info">
                        <p className='info-title'>Email Address</p>
                        <p>{loggedInUser.email}</p>
                        <br />
                        <p className='info-title'>Phone Number</p>
                        <p>{loggedInUser.phone}</p>
                        <br />
                    </div>
                }
            </div>
        </div>
    );
};

export default UserProfile;