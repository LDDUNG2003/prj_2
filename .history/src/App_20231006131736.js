import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import defaultLayout from './layouts/defaultLayout';
import AdminLayout from './layouts/AdminLayout';
import { publicRoute } from './routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/css/responsive.css';
// import "./bootstrap-5.3.2-dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Routes>
          {publicRoute.map((route ,index) => {
              const Page = route.component
              let Layout
              if(route.layout === 'notlayout'){
                Layout = Fragment
              }
              else if(route.layout === 'adminLayout'){
                Layout = AdminLayout
              }
              else{
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
    );
  }
}

export default App;
