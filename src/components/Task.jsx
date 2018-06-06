import TaskComponent from './TaskComponent';
import TaskQuery from '../graphQL/Task/TaskQuery.graphql';
import withLoader from './withLoader';

export default withLoader(TaskQuery,
    {
        options: ({ match: { params: { taskId } } }) => ({ variables: { taskId } }), // Pass params into the query
    },
)(TaskComponent);

