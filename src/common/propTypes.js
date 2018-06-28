import { shape, string, oneOf, object, bool, arrayOf, func } from 'prop-types';

const genericProps = shape({
    loading: bool.isRequired,
    error: string.isRequired,

});

const taskProps = shape({
    id: string.isRequired,
    name: string.isRequired,
    description: string,
    createdDate: object.isRequired,
    status: oneOf(['pending', 'ongoing', 'completed']),
});

const tasksProps = arrayOf(taskProps);

const updateTaskProps = shape({
    match: shape({
        params: shape({
            taskId: string,
        }),
    }),
    editTask: func,
    addTask: func,
});

export {
    genericProps,
    taskProps,
    tasksProps,
    updateTaskProps,
};
