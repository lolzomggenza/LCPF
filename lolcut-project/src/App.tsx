import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Main, Header, Card } from './components';
import './App.css';

function App() {
    return (
        <Switch>
            <Route
                path="/"
                exact
                render={() => <Main />}
            />
            <Route
                path="/card"
                render={() => <Card />}
            />
        </Switch>
    );
}

export default App;
