import React from 'react';
import {TPrivileges} from "../../types";

export interface IUser {
    username: string;
    isAuthenticated: boolean;
    privileges: TPrivileges;
}

export interface IUserContext {
    user: IUser;
    saveUser: (newUser: IUser) => void;
};

const PermissionContext =
    React.createContext<IUserContext | undefined>(undefined);

export default PermissionContext;
