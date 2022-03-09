import TopNavBar from "./TopNavBar"
import "../css/header.css"

const PageHeader = () => {
    return(
        <>
            <div className="page-header col-12 col-s-12">
                <div className='logo-container col-6 col-s-6'>
                    <img className='my-logo' src={require("../images/njeveh.jpg")} alt="Elijah" />
                    <h2 className="my-name">Elijah Mutemi</h2>
                </div>
                <TopNavBar />
            </div>
        </>
    );
}

export default PageHeader;