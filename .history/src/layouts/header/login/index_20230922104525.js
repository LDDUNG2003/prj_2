function Login() {
    var LoginCheck = flase
    const nameAccount = "Dung"
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
}

export default Login;