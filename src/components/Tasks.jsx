import { graphql } from 'react-apollo';
import { branch, compose, renderComponent } from 'recompose';
import TasksComponent from './TasksComponent';
import TasksQuery from '../graphQL/Task/TasksQuery.graphql'
import Loader from './Loader';

const renderWhileLoading = (component = Loader, propName = 'data') =>
    branch(
        props => props[propName] && props[propName].loading,
        renderComponent(component),
    );

export default compose(
    graphql(TasksQuery),
    renderWhileLoading(),
)(TasksComponent);
