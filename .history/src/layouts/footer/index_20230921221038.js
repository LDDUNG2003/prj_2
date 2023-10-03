function Footer(){
    return (
        <div className="footer ">
            <div className="footer__lable">
                <ul className="footer--list">
                <li className="footer--list-item">
                    <h3 className="footer--list-heading">
                    thông tin chung
                    </h3>
                </li>
                <li className="footer--list-item footer--inheri">công ty tnhh hoàng hoan</li>
                <li className="footer--list-item"><i className="fa-solid fa-phone" style={{color: '#ffffff'}} />099999999</li>
                <li className="footer--list-item"><i className="fa-regular fa-envelope" style={{color: '#ffffff'}} />excepturi@gmail.com
                </li>
                <li className="footer--list-item"><i className="fa-solid fa-location-dot fa-beat" style={{color: '#ffffff'}} />26 khương đình , thanh xuân , hà nội</li>
                </ul>
                <ul className="footer--list">
                <li className="footer--list-item">
                    <h3 className="footer--list-heading">về chúng tôi</h3>
                </li>
                <li className="footer--list-item">giới thiệu</li>
                <li className="footer--list-item">sản phẩm</li>
                <li className="footer--list-item">tin tức</li>
                <li className="footer--list-item">đối tác</li>
                <li className="footer--list-item">liên hệ</li>
                </ul>
                <ul className="footer--list">
                <li className="footer--list-item">
                    <h3 className="footer--list-heading">kết nối với chúng tôi</h3>
                </li>
                <li className="footer--list-item">
                    <ul className="footer--list-contact">
                    <li className="fooder--list-contact-item"><i className="fa-brands fa-square-facebook" style={{color: '#ffffff'}} /></li>
                    <li className="fooder--list-contact-item"><i className="fa-brands fa-instagram" style={{color: '#ffffff'}} />
                    </li>
                    <li className="fooder--list-contact-item"><i className="fa-regular fa-envelope" style={{color: '#fcfcfd'}} />
                    </li>
                    </ul>
                </li>
                <li className="footer--list-item"><img style={{height: 23}} src="./img/xacnha-bocongthuong.png" alt /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer