import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { updateTaskProps, genericProps } from '../../../common/propTypes';

let input;
class EditTaskComponent extends Component {
    render() {
        const { mutate, match: { params: { taskId } } } = this.props;
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    mutate({ variables: { taskId, name: input.value } });
                    input.value = '';
                }}
            >
                <input
                    ref={(node) => {
                        input = node;
                    }}
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
