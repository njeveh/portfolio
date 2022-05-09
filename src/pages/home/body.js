import HomePageCarousel from "./couresel";
const Body = () => {
    return(
        <>
            <div className="page-body">
                <div id="main-image-container">
                <HomePageCarousel />              
                </div>
                    <div className="skill-banner-container row no-gutters justify-content-between mx-0">
                        <div className="skill-banner col-11 col-sm-5 col-md-3 p-0">
                            <div className="skill-title"><h3>Systems Analyst and Designer</h3></div>
                            <img className='.skill-image img-fluid' src={require("../../images/devops-engineers-web-design-with-people-vector.jpg")} alt="Welcome" />
                            <div className="skill-summary">
                                I engage in all operations of software systems development life cycle including
                                problem study and analysis, design, coding, testing, implementation and maintenance.
                            
                            </div>
                        </div>
                        <div className="skill-banner col-11 col-sm-5 col-md-3 p-0">
                            <div className="skill-title"><h3>Full Stack Web Developer</h3></div>
                            <img className='.skill-image img-fluid' src={require("../../images/team-of-developers-working-on-code-free-vector.jpg")} alt="Welcome" />
                            <div className="skill-summary">
                                My expertise so far has more ground on web development with a two year experience,
                                whereby i design and build both front-end and back-end components of web applications.
                            </div>
                        </div>
                        <div className="skill-banner col-11 col-sm-5 col-md-3 p-0">
                            <div className="skill-title"><h3>Desktop Application Developer</h3></div>
                            <img className='.skill-image img-fluid' src={require("../../images/mobil3.jpg")} alt="Welcome" />
                            <div className="skill-summary">
                                I am currently learning how to build cross-platform desktop applications using Python and C++ and QT,
                                and I am available for a job opportunity or internship program offering me a chance to gain hands on experience
                                in this.
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
}

export default Body;