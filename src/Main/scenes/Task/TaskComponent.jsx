import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { genericProps, taskProps } from '../../../common/propTypes';

class TaskComponent extends Component {
    render() {
        const { data: { task } } = this.props;
        return (
            <div>
                <Button><Link to={`/update/${task._id}`}>Edit</Link></Button>
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
