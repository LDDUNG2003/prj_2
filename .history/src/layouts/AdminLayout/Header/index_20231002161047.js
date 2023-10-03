import { Link } from "react-router-dom";
import Logo from "~/logo.png"
import '../styles/index.css'
function Header() {
    return ( 
        <nav className="admin_laybel">
            <Link style='padding-left: 20px;' to="/"><img className="logo-admin" src={Logo} alt="" /></Link>
            <ul className="admin-List">
                <li className='Admin-item'><Link className="admin-Link" to='/'>Trang Chủ</Link></li>    
            </ul>
        </nav>
     );
}

export default Header;