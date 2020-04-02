import React from 'react';
import Toolbar from './Toolbar';

class App extends React.Component {
    render() {
        return (
            <div>
                <Toolbar>
                    <h1>Hello React</h1>
                    <h2>Component composition</h2>
                </Toolbar>
            </div>
        )
    }
}

export default App;
