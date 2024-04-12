import React, { useState, useEffect } from "react";
import projects from './projects.json';
import './styles.scss';


const Projects=()=>{
    const [blurLevel, setBlurLevel] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the distance between the image and the viewport
            const image = document.querySelector('.projects__item__banner img');
            if (image) {
                const bounding = image.getBoundingClientRect();
                const clearWindowThreashold = 350;
                const distanceToViewportTop = Math.abs(bounding.top) - clearWindowThreashold;
                const distanceToViewportBottom = distanceToViewportTop + 2 * clearWindowThreashold;
                
                // Adjust blur level based on distance
                const maxDistance = window.innerHeight / 2; // Adjust this threshold as needed
                const newBlurLevelNoWindow = Math.min(Math.min(10, (distanceToViewportTop / maxDistance) * 10), Math.min(10, (distanceToViewportTop / maxDistance) * 10));
                const newBlurLevel = (-clearWindowThreashold > Math.abs(bounding.top) > clearWindowThreashold) ? 0 : newBlurLevelNoWindow
                
                // Set the blur level
                setBlurLevel(newBlurLevel);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <ul className="projects" >
                {
                    projects.projects.map((item, key) => (
                        <li key={key} className="projects__item">
                            <div className="projects__item__banner">
                                <h1>{item.title}</h1>
                                <img src={require(`./${item.image}`)} alt={item.title} style={{ filter: `blur(${blurLevel}px) brightness(${Math.min(1-blurLevel/20, 0.9)})` }}/>
                            </div>
                            <div className="projects__item__tags">
                                {
                                    item.tags.map((tag, index) => (
                                        <li key={key} className="projects__item__tags__tag">
                                            <div>
                                                <p>{tag}</p>
                                            </div>
                                            
                                        </li>
                                    ))
                                }
                            </div>
                            <div className="projects__item__links">

                            </div>
                            <p className="projects__item__description">
                                {item.description}
                            </p>

                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Projects;