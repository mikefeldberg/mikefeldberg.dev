import React, { Component } from 'react';
import HomePage from './components/HomePage/HomePage'
import './App.css';

class App extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <HomePage />
            </div>
        );
    }
}

export default App;