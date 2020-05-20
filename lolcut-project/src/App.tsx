import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { Main, Header, Card, Blog, Post } from './components';
import { Global } from "./Global";

function App() {
    const location = useLocation();

    return (
        <React.Fragment>
            <Global pathname={location.pathname} />
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
        </React.Fragment>
    );
}

export default App;
