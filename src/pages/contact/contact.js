import PageHeader from "../../global/header";
import ContactBox from "./info";
import Footer from "../../global/footer"
const Contact = () => {
    return(
        <>
            <PageHeader />
            <div className="page-body">
                <div className="col-12 col-s-12" style={{ position: "relative" }}>
                <ContactBox />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;