import React from 'react';
import { Route, Routes } from "react-router-dom";
import {appRoutes} from "./appRoutes";
import {IRoute, TProtectRouteProps} from "../types";
import ProtectedRoute from "./protectedRoute";
import {useUser} from "../hooks/useUser";

const RoutesWrapper = () => {
    const {user} = useUser();
    const protectedRouteProps: Omit<TProtectRouteProps, 'outlet'> = {
        isAuthenticated: user.isAuthenticated,
        authenticationPath: '/login'
    };

    return (
        <Routes>
            {appRoutes.map(
                ({id, path, exact, isProtected, component: Page}: IRoute, index) => (
                    <Route
                        key={`${id}-${index}`}
                        path={path}
                        element={isProtected ? <ProtectedRoute {...protectedRouteProps} outlet={<Page />} /> : <Page />}
                    />
                )
            )}
        </Routes>
    )
}

export default RoutesWrapper;