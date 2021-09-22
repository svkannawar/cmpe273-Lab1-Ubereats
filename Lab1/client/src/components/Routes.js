import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './User/Login';
import SignUp from './User/SignUp';
import Home from '../components/User/Navigationbar'

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