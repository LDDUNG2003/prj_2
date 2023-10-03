import { Link } from "react-router-dom";

function AdminMenu() {
    return ( 
        <nav className="Menu-Admin">
            <ul className="Menu-List">
                <li className="Menu-List--item"><Link className="admin-Link" to='/'>Server</Link></li>
                <li className="Menu-List--item"><Link className="admin-Link" to='/'>Server</Link></li>
                <li className="Menu-List--item"><Link className="admin-Link" to='/'>Server</Link></li>
                <li className="Menu-List--item"><Link className="admin-Link" to='/'>Server</Link></li>
            </ul>
        </nav>
    );
}

export default AdminMenu;