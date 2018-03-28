import React, { Component } from "react";

class EditTaskComponent extends Component {
    render() {
        const { updateTask, loading, error, match: { params: { taskId } } } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return  (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    updateTask({ _id: taskId, todo: { name: input.value } });
                    // input.value = "";
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Update Task</button>
            </form>
        );
    }
}

export default EditTaskComponent;
