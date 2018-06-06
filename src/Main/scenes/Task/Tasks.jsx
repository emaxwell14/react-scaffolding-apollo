import TasksComponent from './TasksComponent';
import TasksQuery from '../../../common/graphql/Task/TasksQuery.graphql';
import composeWithLoaderAndError from '../../../common/components/composeWithLoaderAndError';

export default composeWithLoaderAndError(TasksQuery)(TasksComponent);
