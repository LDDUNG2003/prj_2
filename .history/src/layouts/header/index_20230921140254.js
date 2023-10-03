import { Link } from "react-router-dom"

function Header(){
    let Href = window.location.href
    console.log(Href)
    return (
        <div className="header">
            <div className="navBar">
                <div className="logo--block">
                <img src="./img/logo.png" alt="logo" className="logo" />
                <button className="menu-mobile" id="mobileMenu"><i className="fas fa-bars" style={{color: '#fff'}} /></button>
                </div>
                <ul className="navBar__list">
                <li className="navBar__list-item"><Link to="/" className="navBar__list--link">trang chủ</=></li>
                <li className="navBar__list-item">
                    <Link to="/" className="navBar__list--link">giới thiệu</Link>
                </li>
                <li className="navBar__list-item">
                    <Link to="/product" className="navBar__list--link">sản phẩm</=>
                </li>
                <li className="navBar__list-item">
                    <Link to="/partner" className="navBar__list--link">đối tác</=>
                </li>
                <li className="navBar__list-item">
                    <Link to="/news" className="navBar__list--link">tin tức</=>
                </li>
                <li className="navBar__list-item">
                    <Link to="/contact" className="navBar__list--link">liên hệ</=>
                </li>
                </ul>
            </div>
        </div>

    )
}

export default Header