import React, { useState } from 'react'
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import './Header.css'


function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (


        <div className="header-con">
            <div className="logo-container">
                <h1 href="#">Devnoi </h1>
            </div>
            <ul className={click ? "menu active" : "menu"} >
                <li className="menu-link" onClick={closeMobileMenu}>
                    <a href="#skill">SKILL</a>
                </li>
                <li className="menu-link" onClick={closeMobileMenu}>
                    <a href="#project">PROJECT</a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <FiX />
                ) : (
                    <FiMenu />
                )}
            </div>
        </div>

    )
}

export default Header