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
            </div>

        </>
    );
}

export default Body;