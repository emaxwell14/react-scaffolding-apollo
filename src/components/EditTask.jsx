import { graphql } from "react-apollo";
import EditTaskComponent from "./EditTaskComponent";
import TaskMutation from '../graphQL/Task/TaskMutation.graphql'

// TODO pass type

export default graphql(TaskMutation)(EditTaskComponent);
