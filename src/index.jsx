import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Main from './Main/Main';
import registerServiceWorker from './registerServiceWorker';
import client from '../graphQlClient';

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Main />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('app'),
);
registerServiceWorker();
