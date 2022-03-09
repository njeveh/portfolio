import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";

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
            <div className={className + " col-6 col-s-6"}>
                <ul>
						<li><FaHome /> Home</li>
						<li>Portfolio</li>
						<li>Services</li>
						<li>About</li>
						<li>Blog</li>
						<li>Contact</li>
                        <li className="icon" style={{float: "right"}}>
                            <a href="true"><FaBars onClick={toggleNavBar}/></a>
                        </li>
                </ul>
            </div>
        </>
    );
}

export default TopNavBar;