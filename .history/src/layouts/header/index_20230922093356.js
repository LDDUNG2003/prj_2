import ListMenu from "./itemsHeader";
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
                    <ListMenu />
                </ul>
            </div>
        </div>
    )
}



export default Header