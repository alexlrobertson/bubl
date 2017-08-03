import React, { Component } from 'react';
import './App.css';
import Item from './components/Item';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stories: [],
            index: 0,
        };
    }

    componentDidMount() {
        fetch(
            'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=f62f2940314e41f9add9fa258dfd4441',
            {
                apiKey: 'f62f2940314e41f9add9fa258dfd4441',
            },
        )
            .then(response => response.json())
            .then(({ results }) => this.setState({ stories: results }))
            .catch(console.error);
    }

    render() {
        const { index, stories = [] } = this.state;

        const story = stories[index];

        return (
            <div className="App">
                <Item
                    {...story}
                    onNext={() => {
                        this.setState(({ index }) => {
                            return {
                                index: index + 1,
                            };
                        });
                    }}
                />
            </div>
        );
    }
}

export default App;
