import React, { Component } from "react";
import { Link } from "react-router-dom";

class TasksComponent extends Component {
    render() {
        const { data: { tasks, loading, error }} = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return tasks.map(({_id, name, description}) => (
            <div key={_id}>
                <Link className="nav-link" to={`/${_id}`}>{name}</Link>
                <p>{description}</p>
            </div>
        ));
    }
}

export default TasksComponent;
