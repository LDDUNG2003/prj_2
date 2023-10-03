import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header(){
    let Href = window.location.href
    console.log(Href)
    
    return (
        <div className="header">
            <div className="navBar">
                <div className="logo--block">
                <img src="./img/logo.png" alt="logo" className="logo" />
                <button onClick={clickMenu} className="menu-mobile" id="mobileMenu"><FontAwesomeIcon /></button>
                </div>
                <ul className="navBar__list">
                    <li className="navBar__list-item"><Link Link to="/" className="navBar__list--link">trang chủ</Link></li>
                    <li className="navBar__list-item">
                        <Link to="/" className="navBar__list--link">giới thiệu</Link>
                    </li>
                    <li className="navBar__list-item">
                        <Link Link to="/product" className="navBar__list--link">sản phẩm</Link>
                    </li>
                    <li className="navBar__list-item">
                        <Link Link to="/partner" className="navBar__list--link">đối tác</Link>
                    </li>
                    <li className="navBar__list-item">
                        <Link Link to="/news" className="navBar__list--link">tin tức</Link>
                    </li>
                    <li className="navBar__list-item">
                        <Link Link to="/contact" className="navBar__list--link">liên hệ</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
function clickMenu(){
    if (document.getElementsByClassName("navBar__list")[0].style.display === "block") {
        document.getElementsByClassName("navBar__list")[0].style.display = null;
    } else {
        document.getElementsByClassName("navBar__list")[0].style.display = "block";
    }
}

export default Header