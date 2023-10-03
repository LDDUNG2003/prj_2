import { Link } from "react-router-dom"

function ListMenu() {
    var menuItem = ["Home", "About", "Contact", "News" , "Products"]
    // var menubar =[]
    for (var i = 0; i < menuItem.length; i++) {
        menu.push(
            <li className="navBar__list--item" key={i}>
                <Link to={menuItem[i]}>{menuItem[i]}</Link>
            </li>
        )
        console.log(menuItem[i])
    }
    return (
        <>
        {menubar}
        </>
    );
}

export default ListMenu;