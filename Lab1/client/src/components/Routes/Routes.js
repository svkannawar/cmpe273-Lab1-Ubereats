import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Common/Login';
import SignUp from '../Common/SignUp';
import Home from '../Common/Home'
import CustDashboard from '../Customer/CustDashboard'
import RestDashboard from '../Restaurant/RestDashboard'

export class Routes extends Component {
    render () {
        return (
            <div>
                <Route exact path='/' component={ Home } />
                <Route path='/signup' component={ SignUp } />
                <Route path='/login' component={ Login } />
                <Route path='/custDashboard' component={ CustDashboard } />
                <Route path='/restDashBoard' component={ RestDashboard } />

            </div>
        )
    }
}

export default Routes