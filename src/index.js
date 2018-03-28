import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import client from './graphQL/graphQlClient';

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
