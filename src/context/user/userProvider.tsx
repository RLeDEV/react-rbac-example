import React, {useState} from 'react';
import UserContext, {IUser} from "./userContext";
import {PRIVILEGES_MOCKS} from "../../mocks/privileges";

type TUserProviderProps = {
    children: React.ReactNode | React.ReactFragment | React.ReactPortal;
};

export const UserProvider: React.FC<TUserProviderProps> = ({
                                                         children,
                                                     }) => {
    const [user, setUser] = useState<IUser>({
        username: '',
        isAuthenticated: false,
        privileges: PRIVILEGES_MOCKS.read
    });

    const saveUser = (newUser: IUser) => setUser(newUser);

    return (
        <UserContext.Provider value={{ user, saveUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = React.useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}