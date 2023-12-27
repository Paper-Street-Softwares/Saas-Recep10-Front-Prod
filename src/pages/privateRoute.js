import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
    const [cookies] = useCookies(['jwt']); // Alterado para 'jwt'

    // Verifica se o token está presente nos cookies
    const isAuthenticated = !!cookies.jwt; // Alterado para 'jwt'

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/home" replace={true} />
    );
}