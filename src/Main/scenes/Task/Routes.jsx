import React from 'react';
import { Route } from 'react-router-dom';
import Task from './scenes/View/Task';
import Tasks from './scenes/List/Tasks';
import EditTask from './scenes/Edit/EditTask';

const Routes = () => (
    <div className="p-3">
        <Route path="/tasks" component={Tasks} exact />
        <Route path="/tasks/view/:taskId" component={Task} />
        <Route path="/tasks/update/:taskId?" component={EditTask} />
    </div>
);

export default Routes;
