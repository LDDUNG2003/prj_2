import { Link } from "react-router-dom"

function ListMenu() {
    var menuItem = ["Trang Chủ", "Giới Thiệu","sản phẩm","Đối Tác","tin tức","Liên hệ"]
    var menuLink = ["/", "/About", "/Products","partner", "/News", "/Contact"]
    var menubar =[]
    let Href = window.location.href
    console.log(Href.length)
    

    for (var i = 0; i < menuItem.length; i++) {
        if(Href.slice() == menuLink[i]) {
            menubar.push(
                <li onClick={clickLink} className="select--item navBar__list-item" key={i}>
                    <Link className="navBar__list--link" to={menuLink[i]}>{menuItem[i]}</Link>
                </li>
            )
        }else{
            menubar.push(
                <li className="navBar__list-item">
                    <Link to={menuLink[i]} className="navBar__list--link">{menuItem[i]}</Link>
                </li>
            )
        }
        console.log(menuItem[i])
    }
    return (
        <>
        {menubar}
        </>
    );

    function clickLink(){
        document.getElementsByClassName("navBar__list")[0].style.display = null;
    }
}


export default ListMenu;