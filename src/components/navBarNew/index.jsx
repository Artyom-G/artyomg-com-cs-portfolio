import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "./artyomg-logo.svg";
import './styles.scss';
import RoundLoadButton from "../roundLoadButton";
import resumePdf from './resume.pdf';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'RESUME',
        to: {resumePdf}
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

const NavbarNew = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    const navigate = useNavigate();

    const handleNavingateToContactMePage = (link) => {
        navigate(link);
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <RoundLoadButton/>

            </div>
            <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ""} `} >
                {
                    data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <Link className="navbar__container__menu__item__links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <div className="navbar__container__menu__contact">
                        <button onClick={() => handleNavingateToContactMePage("/contact")}>
                            <span className="contact-button">
                                CONTACT
                            </span>
                        </button>
                    </div>
                </li>
            </ul>
            <div className="nav-icon" onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                }
            </div>
        </nav>
    )
}

export default NavbarNew;