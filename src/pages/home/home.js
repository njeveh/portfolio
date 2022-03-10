import '../../css/home.css'
import PageHeader from "../../global/header";
import Footer from "../../global/footer"
const Home = () => {
    return(
        <>
        <PageHeader />
        <div className="home-page-main col-12 col-s-12" style={{ position: "relative" }}>
            <h1>Computer Science Undergraduate and Software Developer</h1>
            <div className='subtitle-container'>
            <p className="col-6 col-s-12">I am currently an undergrad student of JKUAT, Kenya, pursuing Bsc. Computer Science and I am very much passionate about it.
            I am interested in software design and development and currently my speciality is in fullstack web development.
            </p>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;