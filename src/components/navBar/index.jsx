import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './styles.scss';
import CircleButton from "../circleButton";
import Logo from './artyomg-logo.svg';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PROJECTS',
        to: '/projects'
    },
    {
        label: "CONTACT",
        to: '/contact'
    }

]

const NavBar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    const navigate = useNavigate();

    const handleNavingateToPage = (link) => {
        navigate(link);
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <CircleButton logoSrc={Logo} link="/"/>

            </div>
            <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ""} `} >
                {
                    data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__contact">
                            <button onClick={() => handleNavingateToPage(item.to)}>
                                <span className="contact-button">
                                    {item.label}
                                </span>
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className="nav-icon" onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                }
            </div>
        </nav>
    )
}

export default NavBar;