import PageHeader from "../../global/header";
import Footer from "../../global/footer";
import SkillsBody from "./skills_body";
const Skills = () => {
    return(
        <>
            <PageHeader />
            <div className="page-body pb-0 pt-0">
                <div className="col-12 col-s-12" style={{ position: "relative" }}>
                    <SkillsBody />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Skills;