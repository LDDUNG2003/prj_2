import { Link } from "react-router-dom"

function ListMenu() {
    var menuItem = ["Home", "About", "Contact", "News" , "Products"]
    var menubar =[]
    for (var i = 0; i < menuItem.length; i++) {
        menubar.push(
            <li className="navBar__list--item" key={i}>
                <Link className="navBar__list--link" to={menuItem[i]}>{menuItem[i]}</Link>
            </li>
        )
        console.log(menuItem[i])
    }
    return (
        <>
        {menubar}
        </>
    );
    function clickMenu(){
        if (document.getElementsByClassName("navBar__list")[0].style.display === "block") {
            document.getElementsByClassName("navBar__list")[0].style.display = null;
        } else {
            document.getElementsByClassName("navBar__list")[0].style.display = "block";
        }
    }
    
    document.getElementsByClassName("navBar__list-item")[0].array.forEach(element => {
        element.addEventListener("click", clickLink);
    });
    
    function clickLink(){
        document.getElementsByClassName("navBar__list")[0].style.display = null;
    }
}

export default ListMenu;