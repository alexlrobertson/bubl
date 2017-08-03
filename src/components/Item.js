import React, { Component } from 'react';

export default class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            asking: true,
            showing: false,
        };
    }

    render() {
        const { asking, showing } = this.state;
        const { onNext, title, abstract, url } = this.props;

        return (
            <div>
                <h1>
                    {title}
                </h1>
                {asking &&
                    <div className="options">
                        <button onClick={() => {
                            this.setState({
                                showing: true,
                                asking: false,
                            });
                        }}>Keep it brief</button>
                        <button onClick={() => {
                            window.open(url);

                            onNext();
                        }}>Tell me more</button>
                        <button onClick={onNext}>Tell me later</button>
                    </div>}
                {showing &&
                    <div>
                        <p>{abstract}</p>
                        <button onClick={onNext}>Ok</button>
                    </div>
                }
            </div>
        );
    }
}
