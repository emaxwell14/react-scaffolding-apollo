import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import autobind from 'autobind-decorator';
import { updateTaskProps, genericProps } from '../../../common/propTypes';

class EditTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    @autobind
    setValue(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { mutate, history: { push }, data: { task } } = this.props;
        const { name, description } = this.state;
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    mutate({ variables: { taskId: task._id, name, description } });
                    push(`/view/${task._id}`);
                }}
            >
                <Input
                    name="name"
                    value={name}
                    onChange={this.setValue}
                />
                <Input
                    name="description"
                    value={description}
                    onChange={this.setValue}
                />
                <Button color="success" type="submit">Update Task</Button>
            </form>
        );
    }
}

EditTaskComponent.propTypes = {
    ...genericProps,
    ...updateTaskProps,
};
export default EditTaskComponent;
