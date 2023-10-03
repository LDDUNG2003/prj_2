import { Link } from "react-router-dom";

function AdminLocal() {
    function Redirect() {
        window.location="http://localhost:3000/";
     }

    var adminAccount = true;
    if(adminAccount) {
        return ( 
            <div className="content">hello</div>
        );
    }else{
        Redirect()
        console.log("null admin accound")
    }
}

export default AdminLocal;