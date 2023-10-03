function Login() {
    var LoginCheck = false
    let nameAccount = "Dung"
    if(LoginCheck){
        return (
            <li onClick={clickLink} className="navBar__list-item">
                <Link className="navBar__list--link">
                    {nameAccount}
                    <ul className="Login--navBar">
                        <li className="Login__list-item">
                            <Link className="navBar__list--link">tài khoản </Link>
                        </li>
                        <li className="Login__list-item">
                            <Link className="navBar__list--link">đổi mật khẩu </Link>
                        </li>
                        <li className="Login__list-item">
                            <Link className="navBar__list--link">đăng xuất</Link>
                        </li>
                    </ul>
                </Link>
            </li>
        )
    }
    else{
        return(
            <li onClick={clickLink} className="navBar__list-item">
                <Link to = "/login" className="navBar__list--link"></Link>
            </li>
        )
    }
}

export default Login;