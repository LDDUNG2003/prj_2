import { Link } from "react-router-dom";

function AdminMenu() {
    return ( 
        <nav className="Menu-Admin">
            <ul>
                <li className="MenuList"><Link to='/'>Server</Link></li>
                <li className="MenuList"><Link to='/'>Server</Link></li>
                <li className="MenuList"><Link to='/'>Server</Link></li>
                <li className="MenuList"><Link to='/'>Server</Link></li>
            </ul>
        </nav>
    );
}

export default AdminMenu;