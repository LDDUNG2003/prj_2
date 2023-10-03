import { Link } from "react-router-dom";
import '../styles/index.css'
function Header() {
    return ( 
        <nav className="admin_laybel">
            <ul className="adminList">
                <li><Link to='/'>Trang Chủ</Link></li>
                <li><Link to='/ProductManagement'> Quản lý Sản phẩm</Link></li>
                <li><Link to="/pageLocalAdmin">Quản Trị</Link></li>
               
            </ul>
        </nav>
     );
}

export default Header;