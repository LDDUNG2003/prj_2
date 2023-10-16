import { Link } from "react-router-dom";
import { AdminURL} from "./router";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AdminLayout from "~/layouts/AdminLayout";
import { render } from "react-dom";

function AdminLocal() {
    function Redirect() {
        window.location="http://localhost:3000/";
    }

    var adminAccount = true;
    if(adminAccount) {
        return (
           render(
            <Routes>
            {AdminURL.map((route ,index) => {
                const Page = route.component
                const Path = route.path
                
                return(<Route
                    key={index}
                    Path={Path}
                    element={
                      <AdminLayout>
                        <Page/>
                      </AdminLayout>
                    }/>); 
            })}
        </Routes>
           )
        )
        console.log("hello world!");
    }else{
        Redirect()
        console.log("null admin accound")
    }
}

export default AdminLocal;