import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children, redirectTo}) => {
    const [loggedInUser] = useContext(UserContext);

    return loggedInUser.email ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;