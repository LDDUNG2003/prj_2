import PropTypes from 'prop-types'
import Header from "../header";
import Footer from "../footer";
import "../../styles/css/base.css";

function defaultLayout({children}) {
    return(
        <>
        <Header />
        <div className="content">{children}</div>
        <Footer />
        </>
    );
// }


// DefaultLayout.propTypes = {
//     children: PropTypes.node.isRequired,
// };
export default defaultLayout;