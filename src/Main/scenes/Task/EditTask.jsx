import EditTaskComponent from './EditTaskComponent';
import TaskQuery from '../../../common/graphql/Task/TaskQuery.graphql';
import TaskMutation from '../../../common/graphql/Task/TaskMutation.graphql';
import composeWithLoaderAndError from '../../../common/components/composeWithLoaderAndError';

export default composeWithLoaderAndError([
    {
        query: TaskQuery,
        options: {
            options: ({ match: { params: { taskId } } }) => ({
                variables: { taskId }, // Pass params into the query
            }),
            skip: ({ match: { params: { taskId } } }) => !taskId, // Only call initial query if editing
        },
    },
    {
        query: TaskMutation,
        options: {
            options: ({ history: { push } }) => ({
                onCompleted: ({ updateTask: { _id } }) => push(`/view/${_id}`), // Redirect to view on mutate
            }),
        },
    },
])(EditTaskComponent);

