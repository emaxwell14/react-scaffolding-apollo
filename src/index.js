import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import client from './graphQL/graphQlClient';

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('app'));
registerServiceWorker();
