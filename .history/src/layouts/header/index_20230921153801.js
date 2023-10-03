import { Link } from "react-router-dom"

function Header(){
    let Href = window.location.href
    console.log(Href)
    
    return (
        <div className="header">
            <div className="navBar">
                <div className="logo--block">
                <img src="./img/logo.png" alt="logo" className="logo" />
                <button onClick={clickMenu} className="menu-mobile" id="mobileMenu"><i className="fas fa-bars" style={{color: '#fff'}} /></button>
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
var navBar__list = document.getElementsByClassName("navBar__list")[0]
    function clickMenu(){
        if (navBar__list.style.display === "block") {
            navBar__list.style.display = null;
        } else {
            navBar__list.style.display = "block";
        }
    }


export default Header