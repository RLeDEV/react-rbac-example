import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {useUser} from "../../hooks/useUser";
import {IUser} from "../../context/user/userContext";

import {PRIVILEGES_MOCKS} from "../../mocks/privileges";

import * as style from './login.style';

interface ICredentials {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const {saveUser} = useUser();
    const [credentials, setCredentials] = useState<ICredentials>({
        username: '',
        password: ''
    });

    const onSubmitForm = (e: React.FormEvent) => {
        const {username, password} = credentials;

        e.preventDefault();

        if (username && password) {
            const user: IUser = {username, isAuthenticated: true, privileges: PRIVILEGES_MOCKS.read};
            switch(username) {
                case 'write':
                    user.privileges = PRIVILEGES_MOCKS.write;
                    break;
                case 'publish':
                    user.privileges = PRIVILEGES_MOCKS.publish;
                    break;
            }
            saveUser(user);
            navigate('/');
        }
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCredentials(prev => ({...prev, [name]: value}));
    }

    return (
        <style.Login>
            <form onSubmit={onSubmitForm}>
                <style.FormField>
                    <label>Username:</label>
                    <input type={'text'} name={'username'} onChange={onChangeInput} />
                </style.FormField>
                <style.FormField>
                    <label>Password:</label>
                    <input type={'password'} name={'password'} onChange={onChangeInput} />
                </style.FormField>
                <button type={'submit'}>Submit</button>
            </form>
        </style.Login>
    )
}

export default Login;