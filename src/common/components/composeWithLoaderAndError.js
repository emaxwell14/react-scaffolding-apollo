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

export default queries => compose(
    ...queries.map(({ query, options }) => graphql(query, options)),
    renderWhileLoading(),
    renderForError(),
);

