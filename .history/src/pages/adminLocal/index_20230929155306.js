import { Link } from "react-router-dom";

function AdminLocal() {
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
        window.location="http://localhost:3000/";
        console.log("null admin accound")
    }
}

export default AdminLocal;