import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import autobind from 'autobind-decorator';
import Routes from './Routes';

class Main extends Component {
    @autobind
    redirectToView() {
        const { history: { push } } = this.props;
        push('/tasks/');
    }

    render() {
        return (
            <div className="App">
                <header className="bg-dark p-3">
                    <Button color="success" type="submit" onClick={this.redirectToView}>Home</Button>
                </header>
                <Route component={Routes} />
            </div>
        );
    }
}

export default Main;
