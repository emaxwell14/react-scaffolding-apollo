import { graphql } from "react-apollo";
import TaskComponent from "./TaskComponent";
import TaskQuery from '../graphQL/Task/TaskQuery.graphql'

export default graphql(TaskQuery,
    {
        options: ({ match: { params: { taskId } }}) => ({ variables: { taskId }}), // Pass params into the query
    })(TaskComponent);
