import { graphql } from "react-apollo";
import gql from "graphql-tag";
import TaskComponent from "./TaskComponent";

const data = gql`
       query TaskQuery($taskId: String!){
        task(_id: $taskId){
          _id
          name
          description
          createdDate
          status
        }
      }
`;

export default graphql(data,
    {
        options: ({ match: { params: { taskId } }}) => ({ variables: { taskId }}), // Pass params into the query
    })(TaskComponent);
