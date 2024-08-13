import React, { useState } from "react";
import "../Components/CSS/NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link, useLocation } from "react-router-dom";
import logo from '../Assets/XI_logo2.jpg';  // Import the logo image

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const location = useLocation(); // Get current route

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                <img src={logo} alt="Logo" className="logo-image" />
            </h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    const isActive = location.pathname === item.url; // Check if the current route matches
                    return (
                        <li key={index}>
                            <Link className={`${item.cName} ${isActive ? 'active' : ''}`} to={item.url}>
                                <i className={item.icon}></i>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
                {/* <button>Sign Up</button> */}
            </ul>
        </nav>
    );
}

export default Navbar;
