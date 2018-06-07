import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
// import createHistory from 'history/createHashHistory';
import createHistory from 'history/createBrowserHistory';
import Main from './Main/Main';
import registerServiceWorker from './registerServiceWorker';
import client from '../graphQlClient';

const history = createHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
        <ApolloProvider client={client}>
            <Main />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('app'),
);
registerServiceWorker();
