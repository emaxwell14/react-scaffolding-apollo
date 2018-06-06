import TasksComponent from './TasksComponent';
import TasksQuery from '../graphQL/Task/TasksQuery.graphql';
import composeWithLoaderAndError from './composeWithLoaderAndError';

export default composeWithLoaderAndError(TasksQuery)(TasksComponent);
