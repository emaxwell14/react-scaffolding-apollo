import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Tasks = () => (
    <Query
        query={gql`
      {
        tasks{
          _id
          name
          description
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.tasks.map(({ _id, name, description }) => (
                <div key={_id}>
                    <p>{`${name}: ${description}`}</p>
                </div>
            ));
        }}
    </Query>
);

export default Tasks;
