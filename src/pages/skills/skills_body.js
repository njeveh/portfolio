import "../../css/skills.css"
import { FaJava, FaPython, FaDev, FaLaravel, FaReact} from "react-icons/fa";
import { SiDjango, SiCplusplus, SiPhp, SiJavascript} from "react-icons/si";
import { BsCodeSlash} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { ImDatabase } from "react-icons/im";

const SkillsBody = () => {
    return (
        <>
            <section className="content-section bg-primary text-white text-center" id="skills">
            <div className="container">
                <div className="content-section-heading">
                <h2 className="mb-2">Skills</h2>
                </div>
                <div className="container text-center mb-5">
                <p className="lead">Below is a listing of my skills and tech stack, and I'm always looking to learn more.</p>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <FaDev className="service-icon" />
                    </span>
                    <h4>
                    <b>Systems Analysis and Design</b>
                    </h4>
                    <p className="text-faded mb-0">I have significant experience building fully functioning computer applications
                    from scratch, engaging in all activities of software systems development life cycle. I do problem study
                    and analysis, design, build, test, document and maintain applications and train their end users on how to use them.
                    </p>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <CgWebsite className="service-icon" />
                    </span>
                    <h4>
                    <b>Full Stack Web Development</b>
                    </h4>
                    <p className="text-faded mb-0">I've worked on many web development projects as either the backend or
                    the frontend developer, or both. my current web development tech stack is PHP/Laravel, Python/Django,
                    Javascript/React, CSS, HTML, MySQL, PostgreSQL, SQLite, MariaDB and a little bit of Java.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <div className="rounded-circle mx-auto mb-3 text-secondary">
                    <FaJava className="service-icon" />
                    </div>
                    <h4>
                    <b>Java</b>
                    </h4>
                    <p className="text-faded mb-0">I have over <b>2 years</b> of software development experience in Java
                    writing school projects code.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                        <FaPython className="service-icon" />
                    </span>
                    <h4>
                    <b>Python</b>
                    </h4>
                    <p className="text-faded mb-0">I've had experience with Python over the past <b>2 years</b>,
                    I have used it in building backend web applications, for classwork, and for personal projects.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <SiDjango className="service-icon" />
                    </span>
                    <h4>
                    <b>Django</b>
                    </h4>
                    <p className="text-faded mb-0">I have extensive experience using Django and many of its modules, including Django-Rest-Framework. I have built backend web applications
                    using django and most of them provide a restful api to their frontend counterparts.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <SiCplusplus className="service-icon" />
                    </span>
                    <h4>
                    <b>C/C++</b>
                    </h4>
                    <p className="text-faded mb-0">Over the past <b>3 years</b>, I've extensively studied and used C and C++ mostly in classwork and personal projects.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <SiPhp className="service-icon" />
                    </span>
                    <h4>
                    <b>PHP</b>
                    </h4>
                    <p className="text-faded mb-0">
                        With 3 years of experience building web backends, many of my projects utilize PHP and its 
                        framework Laravel.
                        </p>
                    </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <FaLaravel className="service-icon" />
                    </span>
                    <h4>
                    <b>Laravel</b>
                    </h4>
                    <p className="text-faded mb-0">
                        I have built several web applications using Laravel, some as complete standalone web apps
                        and others as apps that provide a restful api to frontend apps.
                    </p>
                    </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <SiJavascript className="service-icon" />
                    </span>
                    <h4>
                    <b>JavaScript</b>
                    </h4>
                    <p className="text-faded mb-0">I have over two years of experience writing client side applications
                    using Javascript and its libraries such as Jquery and React. I am currently learning React Native.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-0">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <FaReact className="service-icon" />
                    </span>
                    <h4>
                    <b>React</b>
                    </h4>
                    <p className="text-faded mb-0">I have over a year of experience using React to build client side web applications, including this one.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <BsCodeSlash className="service-icon" />
                    </span>
                    <h4>
                    <b>HTML, CSS, Bootstrap</b>
                    </h4>
                    <p className="text-faded mb-0">With a combined <b>3 years</b> of experience from personal projects,
                    school projects and building websites for clients, I develop responsive front-end applications,
                    consisting of HTML and CSS/Bootstrap.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-0">
                    <span className="rounded-circle mx-auto mb-3 text-secondary">
                    <ImDatabase className="service-icon" />
                    </span>
                    <h4>
                    <b>Database Management Systems</b>
                    </h4>
                    <p className="text-faded mb-0">
                        I have huge passion for designing databases and writing code that store to, retreive and manipulate
                        data from them. I have experience  using MySQL, PostgreSQL, SQLite and MariaDB as the database
                        management systems for my applications.
                    </p>
                    </div>
                </div>
                </div>
            </section>

        </>
    );
}
export default SkillsBody;