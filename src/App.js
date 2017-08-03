import React, { Component } from 'react';
import './App.css';
import Item from './components/Item';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const stories = [
            {
                title: 'As Allies Stray, Trump Keeps Those on the Right Close',
            },
            {
                title: 'Now Trump Targets Legal Immigration, Urging 50% Cut',
            },
        ];

        const story = stories[0];

        return (
            <div className="App">
                <Item {...story} />
            </div>
        );
    }
}

export default App;
