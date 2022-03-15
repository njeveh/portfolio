import React from "react"
import { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNavBar = () => {
    const [className, setClassName] = useState("top-nav-bar")

    const toggleNavBar = (e) => {
        e.preventDefault();
        if (className === "top-nav-bar") {
            setClassName(prevState => {
                return prevState + " responsive"
            });
        } else {
            setClassName("top-nav-bar");
        }
    }
    return(
        <>
            <nav className={className + " col-12 col-md-6"}>
                <ul>
						<li><Link to='/' className="nav links"><FaHome /> Home</Link></li>
						<li><Link to='/projects' className="nav links">Projects</Link></li>
						<li><Link to='/skills' className="nav links">Skills</Link></li>
						<li><Link to='/about' className="nav links">About</Link></li>
						<li><Link to='/contact' className="nav links">Contact</Link></li>
                        <li className="icon nav links" style={{float: "right"}}>
                            <a href="true"><FaBars onClick={toggleNavBar}/></a>
                        </li>
                </ul>
            </nav>
        </>
    );
}

export default TopNavBar;