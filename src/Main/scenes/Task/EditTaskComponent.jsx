import React, { Component } from 'react';
import { Button } from 'reactstrap';
import autobind from 'autobind-decorator';
import { updateTaskProps, genericProps } from '../../../common/propTypes';

let input;
class EditTaskComponent extends Component {
    @autobind
    redirectToView() {
        const { history: { push }, match: { params: { taskId } } } = this.props;
        push(`/view/${taskId}`);
    }

    render() {
        console.log('&&&&&&&&&&& PROPS', this.props);
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
                <Button color="success" type="submit" onClick={this.redirectToView}>Update Task</Button>
            </form>
        );
    }
}

EditTaskComponent.propTypes = {
    ...genericProps,
    ...updateTaskProps,
};
export default EditTaskComponent;
