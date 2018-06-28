import TaskComponent from './TaskComponent';
import TaskQuery from '../../../../../common/graphql/Task/TaskQuery.graphql';
import composeWithLoaderAndError from '../../../../../common/components/composeWithLoaderAndError';

export default composeWithLoaderAndError([
    {
        query: TaskQuery,
        options: {
            options: ({ match: { params: { taskId } } }) => ({ variables: { taskId } }),
        }, // Pass params into the query
    },
])(TaskComponent);

