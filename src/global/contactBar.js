import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter} from "react-icons/fa";
const ContactBar = () => {
    return(
        <>
            <div className="contact-bar col-12 col-s-12">
                    <div><FaEnvelope /> ekilonzi.cs@gmail.com</div>
                    <div><a href="https://github.com/njeveh" target={"_blank"} rel="noreferrer" className="contact-bar-link" ><FaGithub className="contact-bar-icon" /></a></div>
                    <div><a href='https://www.linkedin.com/in/elijah-kilonzi-computer-scientist/' target={"_blank"} rel="noreferrer" className="contact-bar-link" ><FaLinkedin className="contact-bar-icon" /></a></div>
                    <div><a href='https://twitter.com/Njeveh' target={"_blank"} rel="noreferrer" className="contact-bar-link" ><FaTwitter className="contact-bar-icon" /></a></div>
            </div>
        </>
    );
}
export default ContactBar;