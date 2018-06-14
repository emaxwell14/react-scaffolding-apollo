import React, { Component } from 'react';
import { Button, Input, FormGroup, Label } from 'reactstrap';
import autobind from 'autobind-decorator';
import { updateTaskProps, genericProps } from '../../../common/propTypes';

const RenderField = props => (
    <FormGroup>
        <Label for={props.name}>{props.name}</Label>
        <Input
            {...props}
        />
    </FormGroup>
);

class EditTaskComponent extends Component {
    constructor(props) {
        super(props);
        // Init state for form values
        this.state = { ...props.data.task };
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
                <RenderField
                    name="name"
                    value={name}
                    onChange={this.setValue}
                />
                <RenderField
                    name="description"
                    value={description}
                    onChange={this.setValue}
                />
                <Button color="success" type="submit">Save</Button>
            </form>
        );
    }
}

EditTaskComponent.propTypes = {
    ...genericProps,
    ...updateTaskProps,
};
export default EditTaskComponent;
