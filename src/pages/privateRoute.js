import React from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({children}){

    const user = true;

    return user ? children : <Navigate to="/home"/>
}