import "../css/footer.css"
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="footer-container row ">
                <div className=" indiv footer-first col-12 col-md-4">
                    <p>Elijah Mutemi<br />Software Developer</p>
                </div>
                <div className="link-icons col-12 col-md-4">
                    <div className=" indiv list-inline mb-4">
                        <a href="https://github.com/njeveh" target={"_blank"} rel="noreferrer" className="footer-link" ><FaGithub className="footer-icon" /></a>
                        <a href='https://www.linkedin.com/in/elijah-kilonzi-computer-scientist/' target={"_blank"} rel="noreferrer" className="footer-link" ><FaLinkedin className="footer-icon" /></a>
                        <a href='https://twitter.com/Njeveh' target={"_blank"} rel="noreferrer" className="footer-link" ><FaTwitter className="footer-icon" /></a>
                    </div>
                </div>
                <div className="footer-links col-12 col-md-4">
                    <div className=" indiv list-inline">
                        <Link to='/projects' className="footer-link">Projects</Link>
                        <Link to='/about' className="footer-link">About</Link>
                        <Link to='/contact' className="footer-link">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;