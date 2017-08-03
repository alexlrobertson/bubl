import React from 'react';

export default function Item({ title }) {
    return <div>
        <h1>{title}</h1>
        <div className="options">
            <button>Keep it brief</button>
            <button>Tell me more</button>
            <button>Tell me later</button>
        </div>
    </div>;
}
