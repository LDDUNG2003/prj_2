function Login() {
    var LoginCheck = flase
    if(LoginCheck){
        return (
            <li onClick={clickLink} className="navBar__list-item">
                <Link className="navBar__list--link">
                    <ul className="Login--navBar">
                        <li className="Login__list-item">
                            <Link className="navBar__list--link">accound</Link>
                        </li>
                        <li className="Login__list-item">
                            <Link className="navBar__list--link"></Link>
                        </li>
                        <li className="Login__list-item">
                            <Link className="navBar__list--link"></Link>
                        </li>
                        <li className="Login__list-item">
                            <Link className="navBar__list--link"></Link>
                        </li>
                    </ul>
                </Link>
            </li>
        )
    }
}

export default Login;