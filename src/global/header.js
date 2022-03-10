import TopNavBar from "./topNavBar"
import "../css/header.css"
import "../App.css"

const PageHeader = () => {
    return(
        <>
            <header className="App-header">
                <div className="page-header col-12 col-s-12">
                    <div className='logo-container col-6 col-s-6'>
                        <img className='my-logo' src={require("../images/njeveh.jpg")} alt="Elijah" />
                        <h2 className="my-name">Elijah Mutemi</h2>
                    </div>
                    <TopNavBar />
                </div>
        </header>
        </>
    );
}

export default PageHeader;