import React from 'react';
import {UserProvider} from "./context/user/userProvider";
import RoutesWrapper from "./routes";

import './App.css';

function App() {
    return (
        <div className="App">
            <UserProvider>
                <RoutesWrapper/>
            </UserProvider>
        </div>
    );
}

export default App;
