import PageHeader from "../../global/header";
import ContactBox from "./info";
import Footer from "../../global/footer"
const Contact = () => {
    return(
        <>
            <PageHeader />
            <div className="page-body pb-0">
                <div className="col-12 col-s-12" style={{ position: "relative" }}>
                <ContactBox />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;