import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import defaultLayout from './layouts/defaultLayout';
import { publicRoute } from './routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/css/responsive.css';

function App(){
  return {
    <Router>
    <div className="App">
    <Routes>
      {publicRoute.map((route ,index) => {
          const Page = route.component
          let Layout
          if(route.layout === 'notlayout'){
            Layout = Fragment
          }else{
            Layout = defaultLayout
          }
          return (<Route 
            key={index}
            path={route.path}
            element={
            <Layout>
                <Page/>
              </Layout>
            }/>);
        })}
    </Routes>
    </div>
  </Router>
  }
}

export default App;
