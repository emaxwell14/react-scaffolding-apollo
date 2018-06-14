import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { genericProps, taskProps } from '../../../common/propTypes';

const RenderField = ({ label, value }) => (
    <div className="d-flex">
        <strong>{label}:&nbsp;</strong>
        <p>{value}</p>
    </div>
);

class TaskComponent extends Component {
    render() {
        const { data: { task } } = this.props;
        return (
            <Fragment>
                <Link to={`/update/${task._id}`}><Button color="success">Edit</Button></Link>
                {task &&
                <div className="mt-3">
                    <RenderField label="Name" value={task.name} />
                    <RenderField label="Description" value={task.description} />
                    <RenderField label="Status" value={task.status} />
                    <RenderField label="Created Date" value={task.createdDate} />
                </div>
                }
            </Fragment>
        );
    }
}


TaskComponent.propTypes = {
    ...genericProps,
    ...taskProps,
};

export default TaskComponent;
