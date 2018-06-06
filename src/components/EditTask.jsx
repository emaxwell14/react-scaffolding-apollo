import EditTaskComponent from './EditTaskComponent';
import TaskMutation from '../graphQL/Task/TaskMutation.graphql';
import withLoader from './withLoader';

export default withLoader(TaskMutation)(EditTaskComponent);

