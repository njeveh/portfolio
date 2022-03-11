import "../css/footer.css"
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="footer-container col-12 col-s-12">
                <div className="footer-first col-4 col-s-4">
                    <p>Elijah Mutemi<br />Software Developer</p>
                </div>
                <div className="link-icons col-4 col-s-4">
                    <div>
                        <a href="https://github.com/njeveh" target={"_blank"} className="footer-link" ><FaGithub className="footer-icon" /></a>
                        <a href='https://www.linkedin.com/in/elijah-kilonzi-computer-scientist/' target={"_blank"} className="footer-link" ><FaLinkedin className="footer-icon" /></a>
                        <a href='https://twitter.com/Njeveh' target={"_blank"} className="footer-link" ><FaTwitter className="footer-icon" /></a>
                    </div>
                </div>
                <div className="footer-links col-4 col-s4">
                    <div>
                        <Link to='/' className="footer-link">Home</Link>
                        <Link to='/projects' className="footer-link">Projects</Link>
                        <Link to='/skills' className="footer-link">Skills</Link>
                        <Link to='/about' className="footer-link">About</Link>
                        <Link to='/contact' className="footer-link">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;