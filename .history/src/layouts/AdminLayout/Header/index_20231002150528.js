import { Link } from "react-router-dom";

function Header() {
    return ( 
        <nav className="admin_laybel">
            <ul className="adminList">
                <li><Link to='/'></Link></li>
                <li><Link> Quản lý Sản phẩm</Link></li>
                <li><Link to="/pageLocalAdmin"></Link></li>
               
            </ul>
        </nav>
     );
}

export default Header;