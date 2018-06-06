import React, { Component } from 'react';
import { genericProps, taskProps } from '../../../common/propTypes';

class TaskComponent extends Component {
    render() {
        const { data: { task } } = this.props;
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
