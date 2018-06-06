import { branch, compose, renderComponent } from 'recompose';
import { graphql } from 'react-apollo/index';
import Loader from './Loader';

const renderWhileLoading = (component = Loader, propName = 'data') =>
    branch(
        props => props[propName] && props[propName].loading,
        renderComponent(component),
    );

export default (query, options) => compose(
    graphql(query, options),
    renderWhileLoading(),
);

