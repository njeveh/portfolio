import '../../css/projects.css';
import { FaTimes } from 'react-icons/fa';
const Body = () => {
    return (
        <>
            <section className="content-section" id="projects">
                <div className="container">
                    <div className="content-section-heading text-center">
                        <h3 className="text-secondary mb-0">Portfolio</h3>
                    </div>
                    <div className="container text-center mb-5">
                        <p className="lead">Here you can see some of the projects I have participated in.</p>
                        <p className="lead">(Others are still under development!)</p>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-4 p-item-container">
                            <a className="portfolio-item" data-toggle="modal" href="#portfolioModal1">
                                <span className="caption">
                                    <span className="caption-content">
                                        <h4>JengaBay</h4>
                                        <p className="mb-0">A website that connects sellers of building and construction materials to their prospective
                                            buyers.
                                        </p>
                                    </span>
                                </span>
                                <img className="img-fluid portfolio-img" src={require("../../images/project_images/jengabay.png")} alt="JengaBay" />
                            </a>
                    </div>
                    <div className="col-lg-4 p-item-container">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal2">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Glamour Haven</h4>
                                    <p className="mb-0">A platform where babershop and salon owners can manage their businesses.
                                    </p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/glamour.png")} alt="Glamour Haven" />
                        </a>
                    </div>
                    <div className="col-lg-4 p-item-container">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal3">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Wellington Valuers Company Website</h4>
                                    <p className="mb-0">A website for a valuation and real estate company in Nairobi Kenya.</p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/wellington.png")} alt="JengaBay" />
                        </a>
                    </div>
                    <div className="col-lg-4 p-item-container">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal4">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Tenancy Management System</h4>
                                    <p className="mb-0">A real estate management system that is focused on managing tenacies.</p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/starinc.png")} alt="Starinc" />
                        </a>
                    </div>
                    <div className="col-lg-4 p-item-container">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal5">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Portfolio website</h4>
                                    <p className="mb-0">A personal website to showcase my skills and portfolio.</p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/portfolio.png")} alt="Portfolio" />
                        </a>
                    </div>
                    <div className="col-lg-4 p-item-container">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal6">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Simple Shell</h4>
                                    <p className="mb-0">An interactive command line interface written in C.</p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/simple-shell.png")} alt="Simple Shell" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="container text-center mt-5">
                    <p className="lead">In my free time, I continue to work on personal projects and have many ideas just waiting to be realized.</p>
                </div>
                <div className="container text-center mt-5">
                    <h2 className="mb-4">To see more of my projects...</h2>
                    <a href="https://github.com/njeveh" className="btn btn-xl btn-dark" target="blank">Visit My GitHub &nbsp;<i className="fa fa-github"></i></a>
                </div>
            </section>
            <div className="portfolio-modal modal fade" id="portfolioModal1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="modal-body">
                                        <h2>JengaBay</h2>
                                        <p className="lead">An e-commerce platform for building and construction materials.</p>
                                        <p className="lead">This platform enables sellers of building and construction materials to reach their potential
                                            buyers with ease. A seller is able to create a shop account, add the products they sell to their
                                            accounts and they will be showcased on the website. A buyer is able to reach the seller through the contacts
                                            the seller provides on their accounts. A buyer can also place an order for item(s) on the platform, pay for them and
                                            contact the seller to discuss delivery logistics.</p>
                                        <p className="lead">This is a school project that i have worked on collaboratively with other three fellow students.
                                            I built the back-end application for the website in python/django and django rest framework.</p>
                                        <p className="lead">The Front end application is hosted on<br />
                                            <a href="https://jengabay.vercel.app/" target="blank">https://jengabay.vercel.app/</a>
                                            </p>
                                        <div className="lead mb-4">
                                            <b>View this project on GitHub: </b>
                                            <a href="https://github.com/JengaBay/jenga_bay" target="blank">https://github.com/JengaBay/jenga_bay</a>
                                            <iframe className="mt-2" src="http://lab.lepture.com/github-cards/card.html?user=JengaBay&repo=jenga_bay" title='JengaBay github' frameBorder="0" scrolling={0} width="400" style={{ maxWidth: "70vw"}} height={180} allowtransparency="true"></iframe><br />
                                        </div>
                                        <button className="btn btn-dark btn-l" data-dismiss="modal" target-data="#">
                                            <FaTimes /> Close project
                                        </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal2">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="modal-body">
                                        <h2>Glamour Haven</h2>
                                        <p className="lead">An online beauty salon and barber shop platform.</p>
                                        <p className="lead">This is a web based application that can be customized to suit the requirements of any client.
                                            It offers a platform where owners of a beauty salon or a barbershop can market and sell their products and services.
                                        </p>
                                        <p className="lead">Customers can also buy items online and book appointments to see a barber or a salonist.
                                            The owner of the shop can also manage appointments and their employees on the platform.</p>
                                        <p className="lead">The Front end application is hosted on<br />
                                            <a href="https://glamour-haven.vercel.app/" target="blank">https://glamour-haven.vercel.app/</a>
                                            </p>
                                        <div className="lead mb-4">
                                            <b>View this project on GitHub: </b>
                                            <a href="https://github.com/ProjectXV/GlamourHaven" target="blank">https://github.com/ProjectXV/GlamourHaven</a>
                                            <iframe className="mt-2" src="http://lab.lepture.com/github-cards/card.html?user=ProjectXV&repo=GlamourHaven" title='Glamour Haven github' frameBorder="0" scrolling={0} width="400" style={{ maxWidth: "70vw"}} height={180} allowtransparency="true"></iframe><br />
                                        </div>
                                        <button className="btn btn-dark btn-l" data-dismiss="modal" target-data="#">
                                            <FaTimes /> Close project
                                        </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal3">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="modal-body">
                                        <h2>Wellington Valuers Company Website</h2>
                                        <p className="lead">Company website for Wellington Valuers Limited Company in Nairobi Kenya.</p>
                                        <p className="lead">I was contracted by the company to build for them a website to showcase their profile and portfolio,
                                            which I have worked on as both the front end and back end developer. The website is in it's final
                                            stages of development awaiting to be fully deployed on a production site.</p>
                                        <p className="lead">Wellington valuers is a real estate and valuation company based in Nairobi Kenya.</p>
                                        <p className="lead">Visit the website via:<br />
                                            <a href="https://wellington-dev.herokuapp.com/" target="blank">https://wellington-dev.herokuapp.com/</a>
                                        </p>
                                        <div className="lead mb-4">
                                            <b>View this project on GitHub: </b>
                                            <a href="https://github.com/Wellington-Valuers/web" target="blank">https://github.com/Wellington-Valuers/web</a>
                                            <iframe className="mt-2" src="http://lab.lepture.com/github-cards/card.html?user=Wellington-Valuers&repo=web" title='Wellington github' frameBorder="0" scrolling={0} width="400" style={{ maxWidth: "70vw"}} height={180} allowtransparency="true"></iframe><br />
                                        </div>
                                        <button className="btn btn-dark btn-l" data-dismiss="modal" target-data="#">
                                            <FaTimes /> Close project
                                        </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal4">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="modal-body">
                                        <h2>Tenancy Management System</h2>
                                        <p className="lead">A system that deals with the management of tenants.</p>
                                        <p className="lead">This is a system that I have built in collaboration with my friend;&nbsp;
                                            <a href="https://github.com/JulianaSau" target="blank">Juliana Sau</a> (UI/UX designer and front end developer)
                                            for a client (Starr Inc) on a contractual basis. It is a web and mobile application but the mobile application
                                            is still under development.
                                        </p>
                                        <p className="lead">The system deals with building and house data management, admitting and dismissing tenants, managing rent payment
                                            whereby the system automatically handles money paid via m-pesa and payments made via bank or cash can
                                            be added manually. Once a house is vacated it is showcased on a website and people searching for a house
                                            can see it and book if interested. I built the project's backend application using PhP/Laravel.</p>
                                        <p className="lead">Visit the website via:<br />
                                            <a href="https://wellington-dev.herokuapp.com/" target="blank">https://wellington-dev.herokuapp.com/</a>
                                        </p>
                                        <div className="lead mb-4">
                                            <b>This project's code can't be viewed on GitHub since it's repository is private for security purposes: </b>
                                            <a href="https://github.com/Starr-Inc" target="blank">https://github.com/Starr-Inc</a>
                                        </div>
                                        <button className="btn btn-dark btn-l" data-dismiss="modal" target-data="#">
                                            <FaTimes /> Close project
                                        </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal5">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="modal-body">
                                        <h2>Portfolio Website</h2>
                                        <p className="lead">A website to showcase my professional portfolio.</p>
                                        <p className="lead">I built this website from which you are currently reading in reactjs and css/bootstrap and
                                            I intend to add a PhP backend application to handle client direct messaging and add some more dynamic functionalities.</p>
                                        <div className="lead mb-4">
                                            <b>View this project on GitHub: </b>
                                            <a href="https://github.com/njeveh/portfolio" target="blank">https://github.com/njeveh/portfolio</a>
                                            <iframe className="mt-2" src="http://lab.lepture.com/github-cards/card.html?user=njeveh&repo=portfolio" title='Portfolio github' frameBorder="0" scrolling={0} width="400" style={{ maxWidth: "70vw"}} height={180} allowtransparency="true"></iframe><br />
                                        </div>
                                        <button type='button' className="btn btn-dark btn-l" data-dismiss="modal" target-data="#">
                                            <FaTimes /> Close project
                                        </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal6">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="modal-body">
                                        <h2>Simple Shell</h2>
                                        <p className="lead">An interactive command line Interface.</p>
                                        <p className="lead">This is an application written in C that ressembles the linux terminal but runs on it.
                                            It implements the most basic functionalities of a commandline interface such as taking in paths to the
                                            programs to execute and their arguments as its own arguments and executes the specified program (first argument), passing
                                            the extra arguments to it. This project was inspired by the ALX low level programming course.
                                        </p>
                                        <p className="lead">More detailed project description coming soon!<br /> In the meantime, check out some of my other projects.</p>
                                        <div className="lead mb-4">
                                            <b>View this project on GitHub: </b>
                                            <a href="https://github.com/njeveh" target="blank">https://github.com/njeveh</a>
                                            <iframe className="mt-2" src="http://lab.lepture.com/github-cards/card.html?user=njeveh&repo=" title='JengaBay github' frameBorder="0" scrolling={0} width="400" style={{ maxWidth: "70vw"}} height={180} allowtransparency="true"></iframe><br />
                                        </div>
                                        <button className="btn btn-dark btn-l" data-dismiss="modal" target-data="#">
                                            <FaTimes /> Close project
                                        </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body