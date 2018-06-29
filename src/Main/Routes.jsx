import React from 'react';
import { Route } from 'react-router-dom';
import Home from './scenes/Home/Home';
import TaskRoutes from './scenes/Task/Routes';


const Routes = () => (
    <div className="p-3">
        <Route path="/" component={Home} exact />
        <Route path="/tasks" component={TaskRoutes} />
    </div>
);

export default Routes;
