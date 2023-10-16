import { Link } from "react-router-dom";
import { AdminURL} from "./router";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AdminLayout from "~/layouts/AdminLayout";

function AdminLocal() {
    function Redirect() {
        window.location="http://localhost:3000/";
     }

    var adminAccount = true;
    if(adminAccount) {
        return (
            <Routes>
                {AdminURL.map((route ,index) => {
                    const Page = route.component
                    let Layout = AdminLayout
                    return(
                        key={index},
                        path={route.path},
                        element={
                          <Layout>
                            <Page/>
                          </Layout>
                        }/>); 
                    )
                }
                    )
                }
            </Routes>
        );
    }else{
        Redirect()
        console.log("null admin accound")
    }
}

export default AdminLocal;