import { graphql } from "react-apollo";
import gql from "graphql-tag";
import TaskComponent from "./TaskComponent";

const data = gql`
       query MatchSummary($taskId: String!){
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
        options: ({ match: { params: { taskId } }}) => ({ variables: { taskId }}), // Pass url param into the query
    })(TaskComponent);
