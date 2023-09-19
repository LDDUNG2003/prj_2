
function Header(){
    return (
        <div className="header">
            <div className="navBar">
                <div className="logo--block">
                <img src="./img/logo.png" alt="logo" className="logo" />
                <button className="menu-mobile" id="mobileMenu"><i className="fas fa-bars" style={{color: '#fff'}} /></button>
                </div>
                <ul className="navBar__list">
                <li className="navBar__list-item"><a href="/" className="navBar__list--link">trang chủ</a></li>
                <li className="navBar__list-item">
                    <a href="./index.html" className="navBar__list--link">giới thiệu</a>
                </li>
                <li className="navBar__list-item">
                    <a href="./product.html" className="navBar__list--link">sản phẩm</a>
                </li>
                <li className="navBar__list-item">
                    <a href="./partner.html" className="navBar__list--link">đối tác</a>
                </li>
                <li className="navBar__list-item">
                    <a href="/news" className="navBar__list--link">tin tức</a>
                </li>
                <li className="navBar__list-item">
                    <a href className="navBar__list--link">liên hệ</a>
                </li>
                </ul>
            </div>
        </div>

    )
}

export default Header