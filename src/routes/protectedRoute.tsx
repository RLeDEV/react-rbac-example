import {FC} from "react";
import {Navigate} from "react-router-dom";
import {TProtectRouteProps} from "../types";

const ProtectRoute: FC<TProtectRouteProps> = ({isAuthenticated, authenticationPath, outlet}) => {
    if (isAuthenticated) {
        return outlet;
    } else {
        return <Navigate to={{pathname: authenticationPath}} />
    }
}

export default ProtectRoute;