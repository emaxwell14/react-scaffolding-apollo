import { graphql } from "react-apollo";
import TasksComponent from "./TasksComponent";
import TasksQuery from '../graphQL/Task/TasksQuery.graphql'

export default graphql(TasksQuery)(TasksComponent);
