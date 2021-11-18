import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout'

const App = () => {
    return (
        <Layout />
    );
};

ReactDOM.render(<App />, document.getElementById('app'));