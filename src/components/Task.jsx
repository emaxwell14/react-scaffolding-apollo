import TaskComponent from './TaskComponent';
import TaskQuery from '../graphQL/Task/TaskQuery.graphql';
import composeWithLoaderAndError from './composeWithLoaderAndError';

export default composeWithLoaderAndError(TaskQuery,
    {
        options: ({ match: { params: { taskId } } }) => ({ variables: { taskId } }), // Pass params into the query
    },
)(TaskComponent);

