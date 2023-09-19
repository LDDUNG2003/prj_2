import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faBars} from "@fortawesome/free-solid-svg-icons";
function Star() {
    return ( 
        <FontAwesomeIcon icon={faStar} style={{color: "#fce94f",}} />
     );
}

function homeBTN() {
    return ( 
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
    )
}



export default {Star, homeBTN};