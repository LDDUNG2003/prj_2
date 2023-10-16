import style from "~/styles/css/contact.css"

function Contact() {
    style
    document.title = "Liên Hệ"
    return ( 
        <>
        <div>
            <div className="contact--bgr">
                <img style={{marginTop: 20, width: 120, filter: 'brightness(0) invert(1)'}} src="./img/logo.png" alt />
                <h2 className="contact--title">LIÊN HỆ</h2>
            </div>
            <div className="contact--content">
                <div className="contact--content-img">
                <img src="./img/tintuc-9.png" alt className="contact--img" />
                </div>
                <div className="contact--content-input">
                <h1 className="contact--text-heading">LIên hệ vớI chúng tôI</h1>
                <form action="./" className="contact--input">
                    <input type="text" placeholder="Họ Tên" className="contact--input-item" />
                    <input type="text" placeholder="email" className="contact--input-item" />
                    <input type="text" placeholder="số điện thoại" className="contact--input-item" />
                    <input type="text" placeholder="Nội Dung" className="contact--input-item" />
                    <input type="submit" defaultValue=" Gửi " className="contact--input-btn" />
                </form>
                </div>
            </div>
        </div>
        </>
     );
}

export default Contact;