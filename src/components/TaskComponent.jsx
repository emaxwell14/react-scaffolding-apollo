import React, { Component } from "react";

class TaskComponent extends Component {
    render() {
        const { data: { task }, loading, error } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return  (
            <div>
                {task && <p>{`${task.name}: ${task.description}`}</p>}
            </div>
        );
    }
}

export default TaskComponent;
