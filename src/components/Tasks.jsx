import TasksComponent from './TasksComponent';
import TasksQuery from '../graphQL/Task/TasksQuery.graphql';
import withLoader from './withLoader';

export default withLoader(TasksQuery)(TasksComponent);
