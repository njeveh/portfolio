const Body = () => {
    return(
        <>
            <div className="page-body">
                <div className='main-image-container col-12 col-s-12' id='main-image-container'>
                    <img className='main-image col-12 col-s-12' src={require("../../images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg")} alt="Welcome" />
                    <div className='main-image-caption col-12 col-s-12'>
                        <h1 className='main-image-heading col-12 col-s-12'>A Computer Science Undergraduate and Software Developer</h1>
                    </div>
                </div>
                <div className="skill-banner-container col-12 col-s-12">
                    <div className="skill-banner">
                        <div className="skill-title">Skill</div>
                        <img className='skill-image' src={require("../../images/devops-engineers-web-design-with-people-vector.jpg")} alt="Welcome" />
                        <div className="skill-summary">
                            Skill summary<br />
                            Skill summary<br />
                            Skill summary<br />
                            Skill summary<br />
                            Skill summary
                        
                        </div>
                    </div>
                    <div className="skill-banner">
                        <div className="skill-title">Skill</div>
                        <img className='skill-image' src={require("../../images/team-of-developers-working-on-code-free-vector.jpg")} alt="Welcome" />
                        <div className="skill-summary">Skill summary</div>
                    </div>
                    <div className="skill-banner">
                        <div className="skill-title">Skill</div>
                        <img className='skill-image' src={require("../../images/mobil3.jpg")} alt="Welcome" />
                        <div className="skill-summary">Skill summary</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Body;