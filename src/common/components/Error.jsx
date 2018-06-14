import React, { Fragment } from 'react';

const Error = ({ data: { error } }) => (
    <Fragment>
        <h3>Error Occurred</h3>
        <p>{error.message}</p>
    </Fragment>
);

export default Error;
