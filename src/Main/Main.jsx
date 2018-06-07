import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';
import Routes from './Routes';

class Main extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Route component={Routes} />
            </div>
        );
    }
}

export default Main;