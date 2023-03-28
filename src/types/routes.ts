import {FC} from "react";

export interface IRoute {
    id: string;
    exact: boolean,
    path: string;
    component: FC;
    isProtected: boolean;
}

export type TProtectRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element
};