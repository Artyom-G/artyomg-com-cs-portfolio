import React from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';

const Home=()=>{

    const navigate = useNavigate();

    const handleNavingateToContactMePage=()=>{
        navigate("/contact");
    }

    return(
        <div id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I am Artyom
                    <br/>
                    Fullstack Developer
                </h1>
            </div>
            <Animate play duration={1.5} delay={1} start={{transform: 'translateY(550px)'}} end={{transform: 'translateY(0px)'}}>
                <div className="home__contact-me">
                    <button onClick={handleNavingateToContactMePage}>
                        <span className="contact-button">
                            Hire Me

                        </span>
                    </button>
                </div>
            </Animate>
        </div>
    )
}
export default Home;