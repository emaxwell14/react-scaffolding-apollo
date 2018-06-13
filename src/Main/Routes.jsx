import React from 'react';
import { Route } from 'react-router-dom';
import Task from './scenes/Task/Task';
import Tasks from './scenes/Task/Tasks';
import EditTask from './scenes/Task/EditTask';

const Routes = () => (
    <div className="p-3">
        <Route path="/" component={Tasks} exact />
        <Route path="/view/:taskId" component={Task} />
        <Route path="/update/:taskId?" component={EditTask} />
    </div>
);

export default Routes;
