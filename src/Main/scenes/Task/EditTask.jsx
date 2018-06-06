import EditTaskComponent from './EditTaskComponent';
import TaskMutation from '../../../common/graphql/Task/TaskMutation.graphql';
import composeWithLoaderAndError from '../../../common/components/composeWithLoaderAndError';

export default composeWithLoaderAndError(TaskMutation)(EditTaskComponent);

