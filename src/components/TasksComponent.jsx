import React, { Component } from "react";

class TasksComponent extends Component {
    render() {
        const { data: { tasks, loading, error }} = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return tasks.map(({_id, name, description}) => (
            <div key={_id}>
                <p>{`${name}: ${description}`}</p>
            </div>
        ));
    }
}

export default TasksComponent;
