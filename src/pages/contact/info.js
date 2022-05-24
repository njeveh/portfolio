import '../../css/contact.css'
import { FaMobile, FaEnvelope, FaPaperPlane} from "react-icons/fa";
const ContactBox = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert("Sorry, this functionality is yet to be implemented. Coming soon though!")
      };
    return (
        <>
            <div className="contact-box">
                <h1>Have any Enquiries? Contact me.</h1>
                <div className='align-cente'>
                    <ul>
                        <li>
                            <FaMobile /> +254703761224 
                        </li>
                        <li>
                            <FaEnvelope /> ekilonzi.cs@gmail.com 
                        </li>
                    </ul>
                </div>
                <h3>Or use the form below</h3>
                <div className='contact-form align-center'>
                    <form onSubmit={handleSubmit}>
                        <label>Name * :<br />
                            <input className='input-field' type="text" name='name' required/>
                        </label><br />
                        <label>Email * :<br />
                            <input className='input-field' type="text" name='email' required/>
                        </label><br />
                        <label>Phone :<br />
                            <input className='input-field' type="text" name='phone'/>
                        </label><br />
                        <label>Message * :<br />
                            <textarea className='input-field' name='message' required/>
                        </label><br />
                            <button type="submit" class="btn btn-primary">Send <FaPaperPlane /></button>
                            <button type="reset" class="btn btn-primary" style={{ backgroundColor: "red"}}>Clear</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactBox;