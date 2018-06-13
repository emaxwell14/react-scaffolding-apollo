import EditTaskComponent from './EditTaskComponent';
import TaskQuery from '../../../common/graphql/Task/TaskQuery.graphql';
import TaskMutation from '../../../common/graphql/Task/TaskMutation.graphql';
import composeWithLoaderAndError from '../../../common/components/composeWithLoaderAndError';

export default composeWithLoaderAndError([TaskMutation, TaskQuery],
    {
        options: ({ match: { params: { taskId } } }) => ({ variables: { taskId } }), // Pass params into the query
    })(EditTaskComponent);

