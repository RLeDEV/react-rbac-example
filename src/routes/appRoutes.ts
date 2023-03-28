import Login from "../pages/Login";
import Home from "../pages/Home";
import {IRoute} from "../types";

export const appRoutes: IRoute[] = [
    {
        id: 'login',
        exact: true,
        path: '/login',
        component: Login,
        isProtected: false
    },
    {
        id: 'home',
        exact: true,
        path: '/',
        component: Home,
        isProtected: true
    }
]