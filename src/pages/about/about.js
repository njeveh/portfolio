import PageHeader from "../../global/header";
import Body from "./body";
import Footer from "../../global/footer";
const About = () => {
    return(
        <>
            <PageHeader />
            <div className="page-body">
                <div className="col-12 col-s-12" style={{ position: "relative" }}>
                    <Body />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;