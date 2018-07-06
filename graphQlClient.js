import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const httpLink = new HttpLink({
    uri: 'http://localhost:8080/graphql',
    credentials: 'same-origin',
});

/**
 * Putting token in request header. Token is set in session storage on login.
 * If not present, api will return an error.
 * @type {ApolloLink}
 */
const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => {
        const token = sessionStorage.getItem('token'); // eslint-disable-line no-undef

        // If user authenticated, send request
        if (token) {
            return ({
                headers: {
                    ...headers,
                    authorization: `Bearer ${token}`,
                },
            });
        }

        // If user not authenticated but they are logging in, send request without auth
        if (operation.operationName === 'UserLogin') {
            return ({ headers });
        }

        // Else redirect to login page
        window.location.href = '/'; // eslint-disable-line no-undef
        return null;
    });
    return forward(operation);
});

export default new ApolloClient({
    connectToDevTools: process.env.NODE_ENV !== 'production',
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    // eslint-disable-next-line no-console
                    console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
                );
            }
            if (networkError) {
                // eslint-disable-next-line no-console
                console.error(`[Network error]: ${networkError}`);
            }
        }),
        authMiddleware,
        httpLink,
    ]),
    cache: new InMemoryCache(),
});
