import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children, redirectTo}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return loggedInUser ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;