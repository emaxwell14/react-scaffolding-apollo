import React, { Fragment } from "react";
import { Route } from "react-router-dom"
import Task from "./components/Task";
import Tasks from "./components/Tasks";

const Routes = () => (
    <Fragment>
        <Route path="/" component={Tasks} exact />
        <Route path="/:taskId" component={Task}/>
    </Fragment>
);

export default Routes;
