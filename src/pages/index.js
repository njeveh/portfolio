import {Routes, Route } from "react-router-dom";
import Home from './home/home';
import Projects from './projects/projects'
import Skills from './skills/skills'
import About from './about/about'
import Contact from './contact/contact'
import NoPage from './no_page/noPage';

const BrowseRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NoPage />}></Route>
        </Routes>
    );
}
export default BrowseRoutes;