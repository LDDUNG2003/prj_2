import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from "@fortawesome/free-solid-svg-icons";
function Header(){
    let Href = window.location.href
    console.log(Href)
    
    return (
        <div className="header">
            <div className="navBar">
                <div className="logo--block">
                <img src="./img/logo.png" alt="logo" className="logo" />
                <button onClick={clickMenu} className="menu-mobile" id="mobileMenu"><FontAwesomeIcon icon={faBars} color="#fff"/></button>
                </div>
                <ul className="navBar__list">
                    {
                        function displayMenu(){
                            for(var i=0; i < items.length; i++){

                        }
                    }}
                </ul>
            </div>
        </div>
    )
}
function clickMenu(){
    if (document.getElementsByClassName("navBar__list")[0].style.display === "block") {
        document.getElementsByClassName("navBar__list")[0].style.display = null;
    } else {
        document.getElementsByClassName("navBar__list")[0].style.display = "block";
    }
}

// document.getElementsByClassName("navBar__list-item").forEach(element => {
//     element.addEventListener("click", clickLink);
// });

function clickLink(){
    document.getElementsByClassName("navBar__list")[0].style.display = null;
}


export default Header