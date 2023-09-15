import React, { Component } from 'react';
import logo from './logo.svg';
import defaultLayout from './layouts/defaultLayout';

import './App.css';

class App extends Component {
  render() {
    let Layout = defaultLayout
    return (
      <Layout/>
    );
  }
}

export default App;
