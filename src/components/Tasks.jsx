import { graphql } from "react-apollo";
import gql from "graphql-tag";
import TasksComponent from "./TasksComponent";

const data = gql`
       query {
        tasks{
          _id
          name
          description
        }
      }
`;

export default graphql(data)(TasksComponent);
