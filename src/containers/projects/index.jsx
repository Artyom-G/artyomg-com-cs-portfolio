import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";

const Projects=()=>{
    return(
        <section id="projects" className="projects">
            <PageHeaderContent headerText = "Projects" icon = {<BsInfoCircleFill size = {40}/>}/>
        </section>
    )
}
export default Projects;