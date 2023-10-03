import { Link } from "react-router-dom";

function AdminLocal() {
    var adminAccount = false;
    if(adminAccount) {
        return(
        <>
            <h1 className="Heading">Admin page</h1>
            <ul className="list_heading">
                <li><Link to="" href=""></Link></li>
                <li><Link href=""></Link></li>
                <li><Link href=""></Link></li>
            </ul>
        </>)
    }else{
        console.error("AdminLocal null adminAccount")
    }
}

export default AdminLocal;