import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Task from './scenes/Task/Task';
import Tasks from './scenes/Task/Tasks';

const Routes = () => (
    <Fragment>
        <Route path="/" component={Tasks} exact />
        <Route path="/:taskId" component={Task} />
    </Fragment>
);

export default Routes;
