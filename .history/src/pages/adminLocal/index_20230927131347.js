import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function AdminLocal() {
    return ( 
        <Router>
            <div className="defaul--app">
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
    );
}

export default AdminLocal;