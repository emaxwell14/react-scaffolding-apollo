import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './scenes/Home/Home';
import Task from './scenes/Task/Routes';


const Routes = () => (
    <div className="p-3">
        <Route path="/" component={Home} exact />
        <Route
            path="/tasks"
            render={props => (
                sessionStorage.getItem('USER_VALID') // eslint-disable-line no-undef
                    ? <Task {...props} />
                    : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )}
        />
    </div>
);

export default Routes;
