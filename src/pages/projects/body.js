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
                        <div className="col-lg-4">
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
                    <div className="col-lg-4">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal2">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Glamour Haven</h4>
                                    <p className="mb-0">A platform where babershop and salon owners can manage their businesses, sell their goods and services,
                                        and manage appointment bookings.
                                    </p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/glamour.png")} alt="Glamour Haven" />
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal3">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Wellington Valuers Company Website</h4>
                                    <p className="mb-0">A collection of various neural network models in TensorFlow.</p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/wellington.png")} alt="JengaBay" />
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal4">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Goshen Tenancy Management System</h4>
                                    <p className="mb-0">Intelligently draws a message with images.</p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/starinc.png")} alt="Starinc" />
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal5">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Career Portfolio</h4>
                                    <p className="mb-0">A custom game engine including dynamic lighting, terrain, and static and dynamic objects.</p>
                                </span>
                            </span>
                            <img className="img-fluid portfolio-img" src={require("../../images/project_images/portfolio.png")} alt="Portfolio" />
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a className="portfolio-item" data-toggle="modal" href="#portfolioModal6">
                            <span className="caption">
                                <span className="caption-content">
                                    <h4>Simple Shell</h4>
                                    <p className="mb-0">A simulation using AI techniques such as ray casting, spatial mapping, Bayesian filtering, pathfinding, etc.</p>
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
                                        <h2>Neural Model Library</h2>
                                        <p className="lead">Simple creation of feed forward and recurrent neural models in Tensorflow.</p>
                                        <p className="lead">This library enables incredibly simple creation of feed forward and recurrent neural models in TensorFlow. Simply specify the input shape, output shape, and a list of components (or layers) to make up the network. The library then figures out the dimensions of each component, initializes each component, and builds the model automatically. Most importantly, the model is able to infer the sizes of intermediate layers (including recurrent inputs) automatically, requiring you to only specify the essentials. This enables you to make quick changes to your entire model in just a few lines.</p>
                                        <p className="lead">Several of my friends have commented that, in working on this project, I've essentially just re-created Keras in Tensorflow. In retrospect, it is quite similar to Keras's Sequential model framework, with the addition of being capable of recurrent connections throughout the sequential model. Nonetheless, it was a good learning experience.</p>
                                        <p className="lead">More detailed project description coming soon!<br /> In the meantime, check out some of my other projects.</p>
                                        <div className="lead mb-4">
                                            <b>View this project on GitHub: </b>
                                            <a href="https://github.com/njeveh/jenga_bay/tree/dev" target="blank">https://github.com/njeveh/jenga_bay/tree/dev</a>
                                            <iframe className="mt-2" src="http://lab.lepture.com/github-cards/card.html?user=njeveh&repo=jenga_bay"  frameBorder="0" scrolling={0} width="400" style={{ maxWidth: "70vw"}} height={180} allowtransparency="true"></iframe><br />
                                        </div>
                                        <a className="btn btn-dark btn-l" data-dismiss="modal" href="#">
                                            <FaTimes /> Close project
                                        </a>
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