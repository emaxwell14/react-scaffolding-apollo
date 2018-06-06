import React, { Component } from 'react';
import { genericProps, taskProps } from '../common/propTypes';

class TaskComponent extends Component {
    render() {
        const { data: { task }, loading, error } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
            <div>
                {task && <p>{`${task.name}: ${task.description}`}</p>}
            </div>
        );
    }
}


TaskComponent.propTypes = {
    ...genericProps,
    ...taskProps,
};

export default TaskComponent;
