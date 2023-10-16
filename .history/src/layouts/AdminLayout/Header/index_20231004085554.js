import { Link } from "react-router-dom";
import Logo from "~/logo.png"
import '../styles/index.css'
function Header() {
    var LinkStyle = 'padding-left: 20px;'
    return ( 
        <nav className="admin_laybel">
            <Link to="/"><img className="logo-admin" src={Logo} alt="" /></Link>
            <ul className="admin-List">
                <li className='Admin-item'><Link className="admin-Link" to='/'>Trang Chủ</Link></li>    
            </ul>
        </nav>
     );
}

export default Header;