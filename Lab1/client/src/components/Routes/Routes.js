import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Common/Login';
import SignUp from '../Common/SignUp';
import Home from '../Common/Home'
import CustDashboard from '../Customer/CustDashboard'
import RestDashboard from '../Restaurant/RestDashboard'
import CustProfile from '../Customer/CustProfile'
import CustOrdrs from '../Customer/CustOrdrs'
import CustAbout from '../Customer/CustAbout'
import CustNavbar from '../Customer/CustNavbar'
import Favourites from '../Customer/Favourites'
export class Routes extends Component {
    render () {
        return (
            <div>
                {/* <Route exact path='/' component={ Home } /> */}
                <Route exact path='/' component={ CustNavbar } />
                <Route path='/signup' component={ SignUp } />
                <Route path='/login' component={ Login } />
                <Route path='/custDashboard' component={ CustDashboard } />
                <Route path='/restDashBoard' component={ RestDashboard } />
                <Route path='/customer/profile' component={ CustProfile } />
                <Route path='/customer/orders' component={ CustOrdrs } />
                <Route path='/customer/about' component={ CustAbout } />
                <Route path='/customer/favourites' component={ Favourites } />

            </div>
        )
    }
}

export default Routes