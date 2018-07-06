import EditTaskComponent from './EditTaskComponent';
import TaskQuery from '../../../../../common/graphql/Task/TaskQuery.graphql';
import TasksQuery from '../../../../../common/graphql/Task/TasksQuery.graphql';
import EditTaskMutation from '../../../../../common/graphql/Task/EditTaskMutation.graphql';
import AddTaskMutation from '../../../../../common/graphql/Task/AddTaskMutation.graphql';
import composeWithLoaderAndError from '../../../../../common/components/composeWithLoaderAndError';

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
        query: EditTaskMutation,
        options: {
            name: 'editTask',
        },
    },
    {
        query: AddTaskMutation,
        options: {
            options: () => ({
                refetchQueries: [{ query: TasksQuery }],
            }),
            name: 'addTask',
        },
    },
])(EditTaskComponent);

