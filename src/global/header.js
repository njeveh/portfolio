import "../css/header.css"
import "../App.css"
import TopNavBar from "./topNavBar"
import ContactBar from "./contactBar"

const PageHeader = () => {
    return(
        <>
            <header className="App-header fixed-top">
                <div className="page-header row">
                    <div className='logo-container col-12 col-md-6'>
                        <img className='my-logo' src={require("../images/njeveh.jpg")} alt="Elijah" />
                        <h2 className="my-name">Elijah Mutemi</h2>
                    </div>
                    <TopNavBar />
                </div>
                <ContactBar />
        </header>
        </>
    );
}

export default PageHeader;