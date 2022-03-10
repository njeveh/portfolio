import "../css/footer.css"
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="footer-container col-12 col-s-12">
                <FaGithub />
                <FaLinkedin />
                <FaTwitter />
                

            </div>
        </>
    )
}

export default Footer;