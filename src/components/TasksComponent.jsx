import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { genericProps, tasksProps } from '../common/propTypes';

class TasksComponent extends Component {
    render() {
        const { data: { tasks, loading, error } } = this.props;
        console.log('PROPS', this.props);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return tasks.map(({ _id, name, description }) => (
            <div key={_id}>
                <Link className="nav-link" to={`/${_id}`}>{name}</Link>
                <p>{description}</p>
            </div>
        ));
    }
}

TasksComponent.propTypes = {
    ...genericProps,
    ...tasksProps,
};
export default TasksComponent;
