import { Link } from "react-router-dom";
import { AdminRoute } from "./router";

function AdminLocal() {
    function Redirect() {
        window.location="http://localhost:3000/";
     }

    var adminAccount = true;
    if(adminAccount) {
        return (
            
        );
    }else{
        Redirect()
        console.log("null admin accound")
    }
}

export default AdminLocal;