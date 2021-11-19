import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';
import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <Layout />
        </AppContext.Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));