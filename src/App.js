import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import defaultLayout from './layouts/defaultLayout';
import { publicRoute } from './routes';
import './styles/css/responsive.css';

import './App.css';

class App extends Component {
  render() {
    let Layout = defaultLayout
    return (
      <Router>
        <div className="App">
        <Routes>
        {publicRoute.map((route ,index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page/>}/>
          })}
        </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
