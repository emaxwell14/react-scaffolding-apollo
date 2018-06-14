import EditTaskComponent from './EditTaskComponent';
import TaskQuery from '../../../common/graphql/Task/TaskQuery.graphql';
import TaskMutation from '../../../common/graphql/Task/TaskMutation.graphql';
import composeWithLoaderAndError from '../../../common/components/composeWithLoaderAndError';

export default composeWithLoaderAndError([TaskMutation, TaskQuery],
    {
        options: ({ match: { params: { taskId } }, history: { push } }) => ({
            variables: { taskId }, // Pass params into the query
            onCompleted: ({ updateTask: { _id } }) => push(`/view/${_id}`), // Redirect to view on mutate
        }),
        skip: ({ match: { params: { taskId } } }) => !taskId, // Only call initial query if editing
    })(EditTaskComponent);

