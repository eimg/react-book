import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from 'react-router-dom';

const User = props => {
    const { name } = useParams();

    return (
        <h1>Profile – {name}</h1>
    )
}

const App = props => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/user/Alice">Alice</Link></li>
                    <li><Link to="/user/Bob">Bob</Link></li>
                </ul>
                <div style={{background: 'cyan', padding: 20}}>
                    <Switch>
                        <Route path="/user/:name"><User /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
