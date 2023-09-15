import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import defaultLayout from './layouts/defaultLayout';
import { publicRoute } from './routes';

import './App.css';

class App extends Component {
  render() {
    let Layout = defaultLayout
    return (
      <Router>
        <div className="App">
          {publicRoute.map(route =>{
            return <Route key={index} path={route.path}/>
          })}
        </div>
      </Router>
    );
  }
}

export default App;
