import { Link } from "react-router-dom";

function AdminLocal() {
    var adminAccount = true;
    if(adminAccount) {
        return(
        <>
            <h1 className="Heading">Admin page</h1>
            <ul className="list_heading">
                <li><Link to="./pagelocal" href="">Admin </Link></li>
                <li><Link to="./upLoad" href=""> Upload </Link></li>
                <li><Link to="/" href="">Home</Link></li>
            </ul>
        </>)
    }else{
        console.error("AdminLocal null adminAccount")
    }
}

export default AdminLocal;