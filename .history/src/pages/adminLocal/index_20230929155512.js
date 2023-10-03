import { Link } from "react-router-dom";

function AdminLocal() {
    function Redirect() {
        window.location="localhost:3000/";
     }

    var adminAccount = false;
    if(adminAccount) {
        return ( 
            <ul>
                <li><Link to="/AdminUpLoad">AdminUpLoad</Link></li>
                <li><Link to="/AdminUpLoad">AdminUpLoad</Link></li>
                <li><Link to="/AdminUpLoad">AdminUpLoad</Link></li>
            </ul>
        );
    }else{
        Redirect()
        console.log("null admin accound")
    }
}

export default AdminLocal;