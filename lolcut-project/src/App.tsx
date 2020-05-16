import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Main } from './components';
import './App.css';

function App() {
    return (
        <Switch>
            <Route
                path="/"
                exact
                render={() => <Main 
                    
                />}
            />
        </Switch>
    );
}

export default App;
