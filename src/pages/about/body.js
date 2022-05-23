import '../../css/about.css'
import { Link } from 'react-router-dom';
const Body = () => {
    return (
        <>
        <div className="flex-div col-12 col-s-12">
            <div className="center-div">
                <h1>Elijah Mutemi Kilonzi</h1>
                <p>
                    I am a Computer science undergraduate of <a href="https://www.jkuat.ac.ke/" target={"_blank"} rel="noreferrer">Jomo Kenyatta University of
                    Agriculture and Technology</a>, currently in my third year of study. I am also
                    pursuing an extra software engineering course offered online by <a href="https://www.alxafrica.com/" target={"_blank"} rel="noreferrer">ALX</a> in partnership
                    with <a href="https://www.holbertonschool.com/" target={"_blank"} rel="noreferrer">Holberton School</a>.<br /><br />
                    My enthusiasms include software systems design and development, data science, artificial
                    intelligence, machine learning and networking.<br /><br />
                    I have collaborated with fellow students on several school projects
                    and have developed software for clients on a contractual basis. Through that, I have gained
                    resourceful knowledge and skills which in addition to my computer science
                    background gives me confidence to say that I can easily adapt to the logistics of most software
                    systems development projects.<br /><br />
                    So far I have worked mostly on web based projects where i have built entire websites as both the
                    backend and frontend developer in the cases I worked alone, and as the backend developer
                    in the cases I collaborated with other people.<br /><br />
                    I am currently open to work with you on any software development or networking project on
                    a contractual basis, internship program or a job where i can work remotely.
                </p>
                <div className='flex-div'>
                    <button className='contact-button'><Link to='/contact' className="footer-link">Reach out for enquiries</Link></button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Body;