import { Link } from "react-router-dom"

function Login() {
    var LoginCheck = true;
    var adminAccount = true;
    let nameAccount = "Dung";
    if(LoginCheck){
        if(adminAccount){
            return (
                <li onClick={clickLink} className="navBar__list-item">
                    <Link className="navBar__list--link">
                        {nameAccount}
                        <ul className="Login--navBar">
                            <li className="Login__list-item">
                                <Link  to="/" className="navBar__list--link">tài khoản </Link>
                            </li>
                            <li className="Login__list-item">
                                <Link to="/"  className="navBar__list--link">đổi mật khẩu </Link>
                            </li>
                            <li className="Login__list-item">
                                <Link to="/"  className="navBar__list--link">giỏ hàng</Link>
                            </li>
                            <li className="Login__list-item">
                                <Link to="/"  className="navBar__list--link">đăng xuất</Link>
                            </li>
                            <li className="Login__list-item">
                                <Link to="/adminLocal" className="navBar__list--link"> 
                                </Link>
                            </li>
                        </ul>
                    </Link>
                </li>
            )
        }
        else{
            return (
                <li onClick={clickLink} className="navBar__list-item">
                    <Link className="navBar__list--link">
                        {nameAccount}
                        <ul className="Login--navBar">
                            <li className="Login__list-item">
                                <Link  to="/" className="navBar__list--link">tài khoản </Link>
                            </li>
                            <li className="Login__list-item">
                                <Link to="/"  className="navBar__list--link">đổi mật khẩu </Link>
                            </li>
                            <li className="Login__list-item">
                                <Link to="/"  className="navBar__list--link">giỏ hàng</Link>
                            </li>
                            <li className="Login__list-item">
                                <Link to="/"  className="navBar__list--link">đăng xuất</Link>
                            </li>
                        </ul>
                    </Link>
                </li>
            )
        }
    }
    else{
        return(
            <li className="navBar__list-item">
                <Link to = "/login" className="navBar__list--link">Đăng Nhập</Link>
            </li>
        )
    }

    function clickLink(){
        document.getElementsByClassName("navBar__list")[0].style.display = null;
    }
}

export default Login;