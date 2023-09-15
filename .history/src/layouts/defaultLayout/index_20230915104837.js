import Header from "../header";
import Footer from "../footer";

function defaultLayout() {
    return(
        <>
        <Header />
        {/* <div className="content">{children}</div> */}
        <Footer />
        </>
    );
}

export default defaultLayout;