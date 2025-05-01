import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
    const token = useSelector(state => state.user.token) || localStorage.getItem('token'); // Verifica o token no Redux ou localStorage

    if (!token || token === '') {
        return <Navigate to="/login" />;
    }

    return element;
};

export default PrivateRoute;