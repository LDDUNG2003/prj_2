import { Link } from "react-router-dom";
import { AdminRoute } from "./router";
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
                {AdminURL.map(route ,index) => {
                    const 
                }
            </Routes>
        );
    }else{
        Redirect()
        console.log("null admin accound")
    }
}

export default AdminLocal;