import React from 'react';
import '@styles/Main.scss';

const Result = ({ result }) => {
    return (
        <div className="Result">
        <p>{result}</p>
        </div>
    );
};

export default Result;
