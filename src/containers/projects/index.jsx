import React from "react";
import projects from './projects.json';
import './styles.scss';

const Projects=()=>{
    return(
        <>
            <ul className="projects" >
                {
                    projects.projects.map((item, key) => (
                        <li key={key} className="projects__item">
                            <div className="projects__item__banner">
                                <h1>{item.title}</h1>
                                <img src={require(`./${item.image}`)} alt={item.title} />
                            </div>
                            <div className="projects__item__tags">

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