import React from 'react';

export default function Item({ onNext, title }) {
    return <div>
        <h1>{title}</h1>
        <div className="options">
            <button onClick={onNext}>Keep it brief</button>
            <button onClick={onNext}>Tell me more</button>
            <button onClick={onNext}>Tell me later</button>
        </div>
    </div>;
}
