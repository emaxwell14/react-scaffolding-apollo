import { graphql } from "react-apollo";
import gql from "graphql-tag";
import EditTaskComponent from "./EditTaskComponent";

// TODO pass type
const data = gql`
    mutation addTask($type: String!) {
        updateTodo(_id: $type) {
          _id
        }
      }
`;

export default graphql(data)(EditTaskComponent);
