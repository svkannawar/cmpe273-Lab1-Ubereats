import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Common/Login';
import SignUp from '../Common/SignUp';
import Home from '../Common/Home'

export class Routes extends Component {
    render () {
        return (
            <div>
                <Route exact path='/' component={ Home } />
                <Route path='/signup' component={ SignUp } />
                <Route path='/login' component={ Login } />

            </div>
        )
    }
}

export default Routes