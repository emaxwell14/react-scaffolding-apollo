import EditTaskComponent from './EditTaskComponent';
import TaskMutation from '../graphQL/Task/TaskMutation.graphql';
import composeWithLoaderAndError from './composeWithLoaderAndError';

export default composeWithLoaderAndError(TaskMutation)(EditTaskComponent);

