import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import createHistory from 'history/createHashHistory';
import Main from './Main/Main';
import registerServiceWorker from './registerServiceWorker';
import client from '../graphQlClient';

const history = createHistory();

ReactDOM.render(
    <HashRouter history={history}>
        <ApolloProvider client={client}>
            <Main />
        </ApolloProvider>
    </HashRouter>,
    document.getElementById('app'),
);
registerServiceWorker();
