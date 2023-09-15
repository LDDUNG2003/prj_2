import Header from "../header";
import Footer from "../footer";
import "~/styles/css/base.css";

function defaultLayout({children}) {
    return(
        <>
        <Header />
        <div className="content">{children}</div>
        <Footer />
        </>
    );
}

export default defaultLayout;