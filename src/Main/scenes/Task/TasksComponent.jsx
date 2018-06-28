import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { map, compose, prop } from 'ramda';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { genericProps, tasksProps } from '../../../common/propTypes';

const TaskList = tasks => <div className="mt-3">{tasks}</div>;

const TaskListItem = ({ id, name, description }) => (
    <Card key={id}>
        <CardBody>
            <CardTitle><Link to={`/view/${id}`}>{name}</Link></CardTitle>
            <CardText>{description}</CardText>
        </CardBody>
    </Card>
);

class TasksComponent extends Component {
    render() {
        const { data: { tasks: { edges } } } = this.props;
        return (
            <Fragment>
                <Link to="/update/"><Button color="success">Add</Button></Link>
                {compose(
                    TaskList,
                    map(TaskListItem),
                    map(prop('node')),
                )(edges)
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
