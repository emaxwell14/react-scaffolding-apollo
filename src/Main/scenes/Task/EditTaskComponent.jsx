import React, { Component } from 'react';
import { Button, Input, FormGroup, Label, ButtonGroup } from 'reactstrap';
import autobind from 'autobind-decorator';
import { updateTaskProps, genericProps } from '../../../common/propTypes';

const STATUS_TYPES = [
    'pending',
    'ongoing',
    'completed',
];

const RenderField = props => (
    <FormGroup>
        <Label for={props.name}>{props.name}</Label>
        <Input
            {...props}
        />
    </FormGroup>
);

const RenderButtonField = ({ types, name, onClick, value }) => (
    <div>
        <Label>{name}</Label>
        <ButtonGroup>
            {types.map(type => (
                <Button
                    key={type}
                    color={value === type && 'success'}
                    onClick={() => onClick(type)}
                >
                    {type}
                </Button>
            ))}
        </ButtonGroup>
    </div>
);

class EditTaskComponent extends Component {
    constructor(props) {
        super(props);

        // Init state for form values
        if (props.data) {
            this.state = { ...props.data.task };
        } else {
            this.state = {};
        }
    }

    @autobind
    setValue(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    @autobind
    formSubmit(e) {
        const { mutate, match: { params: { taskId } } } = this.props;
        const { name, description, status } = this.state;
        e.preventDefault();
        mutate({ variables: { taskId, name, description, status } });
    }

    render() {
        const { name, description, status } = this.state;
        return (
            <form onSubmit={this.formSubmit}>
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
                <RenderButtonField
                    name="status"
                    value={status}
                    onClick={type => this.setState({ status: type })}
                    types={STATUS_TYPES}
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
