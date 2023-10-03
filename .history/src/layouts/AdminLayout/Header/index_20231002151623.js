import { Link } from "react-router-dom";
import Logo from "../../../../public/img/logo.png"
import '../styles/index.css'
function Header() {
    return ( 
        <nav className="admin_laybel">
            <img src={Logo} alt="" />
            <ul className="admin-List">
                <li className='Admin-item'><Link className="admin-Link" to='/'>Trang Chủ</Link></li>
                <li className='Admin-item'><Link className="admin-Link" to="/pageLocalAdmin">Quản Trị</Link></li>
                <li className='Admin-item'><Link className="admin-Link" to='/ProductManagement'> Quản lý Sản phẩm</Link></li>
               
            </ul>
        </nav>
     );
}

export default Header;