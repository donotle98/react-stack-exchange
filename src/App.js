import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/'>
                        <SignIn></SignIn>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
