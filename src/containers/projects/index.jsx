import React, { useState, useEffect } from "react";
import projects from './projects.json';
import './styles.scss';
import GistEmbed from "../../components/gistEmbed/gistEmbed";


const Projects=()=>{
    const [blurLevel, setBlurLevel] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        // Debounce the scroll event
        clearTimeout(timer);
        const timer = setTimeout(calculateBlurLevel, 100);
      };
  
      const calculateBlurLevel = () => {
        // Calculate the distance between each image and the viewport
        const images = document.querySelectorAll('.projects__item__banner img');
        if (images.length > 0) {
          const distancesToViewport = Array.from(images).map(image => Math.abs(image.getBoundingClientRect().top));
          const maxDistance = window.innerHeight / 2; // Adjust this threshold as needed
          const newBlurLevel = Math.min(10, Math.max(...distancesToViewport.map(distance => (distance < maxDistance ? 0 : (distance / maxDistance) * 10))));
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
                                <img src={require(`./${item.image}`)} alt={item.title} style={{ filter: `blur(${blurLevel}px)`  }}/>
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
                            <div className="projects__item__play">
                                {
                                    item.playable ? <div dangerouslySetInnerHTML={{ __html: item.embed }} /> : <></>
                                }
                            </div>
                            

                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Projects;