import React from 'react';
import { Route } from 'react-router-dom';
import Home from './scenes/Home/Home';
import Task from './scenes/Task/Task';
import Tasks from './scenes/Task/Tasks';
import EditTask from './scenes/Task/EditTask';

const Routes = () => (
    <div className="p-3">
        <Route path="/" component={Home} exact />
        <Route path="/tasks" component={Tasks} />
        <Route path="/tasks/view/:taskId" component={Task} />
        <Route path="/tasks/update/:taskId?" component={EditTask} />
    </div>
);

export default Routes;
