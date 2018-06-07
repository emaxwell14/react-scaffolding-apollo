import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Task from './scenes/Task/Task';
import Tasks from './scenes/Task/Tasks';
import EditTask from './scenes/Task/EditTask';

const Routes = () => (
    <Fragment>
        <Route path="/" component={Tasks} exact />
        <Route path="/view/:taskId" component={Task} />
        <Route path="/update/:taskId?" component={EditTask} />
    </Fragment>
);

export default Routes;
