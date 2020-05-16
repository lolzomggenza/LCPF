import React from 'react';
import './App.css';

function App() {
    return (
        <Switch>
            <Route
                path="/"
                exact
                render={() => <Main />}
            />
        </Switch>
    );
}

export default App;
