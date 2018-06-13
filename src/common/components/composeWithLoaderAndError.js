import { branch, compose, renderComponent } from 'recompose';
import { graphql } from 'react-apollo/index';
import Loader from './Loader';
import Error from './Error';

const renderWhileLoading = (component = Loader, propName = 'data') =>
    branch(
        props => props[propName] && props[propName].loading,
        renderComponent(component),
    );

const renderForError = (component = Error, propName = 'data') =>
    branch(
        props => props[propName] && props[propName].error,
        renderComponent(component),
    );

export default (queries, options) => {
    const methods = (queries instanceof Array)
        ? queries.map(query => graphql(query, options))
        : [graphql(queries, options)];

    methods.push(renderWhileLoading())
    methods.push(renderForError())
    return compose(...methods);
};

