import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Main, Header, Card, Blog, Post } from './components';
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
            <Route
                path="/blog"
                render={() => <Blog />}
            />
            <Route
                path="/post"
                render={() => <Post />}
            />
        </Switch>
    );
}

export default App;
