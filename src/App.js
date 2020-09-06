import React, {Component} from 'react';
import {Counter} from './components/Counter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
                {document.getElementById('root')}
            </div>
        )
    }
}

export default App;
