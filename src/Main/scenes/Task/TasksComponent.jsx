import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { map, compose } from 'ramda';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { genericProps, tasksProps } from '../../../common/propTypes';

const TaskList = tasks => (<ul>{tasks}</ul>);

const TaskListItem = ({ _id, name, description }) => (
    <Card key={_id}>
        <CardBody>
            <CardTitle><Link className="nav-link" to={`/update/${_id}`}>{name}</Link></CardTitle>
            <CardText>{description}</CardText>
        </CardBody>
    </Card>
);

class TasksComponent extends Component {
    render() {
        const { data: { tasks } } = this.props;
        return (
            <Fragment>
                <Button><Link className="nav-link" to="/update/:taskId">Edit</Link></Button>
                {compose(
                    TaskList,
                    map(TaskListItem),
                )(tasks)
                }
            </Fragment>
        );
    }
}

TasksComponent.propTypes = {
    ...genericProps,
    ...tasksProps,
};
export default TasksComponent;
