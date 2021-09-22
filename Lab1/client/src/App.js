import React, { Component } from 'react';
import Signup from './components/Signup';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

export class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Signup />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
