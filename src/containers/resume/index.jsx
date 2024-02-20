import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const Resume=()=>{
    return(
        <section id="resume" className="resume">
            <PageHeaderContent headerText = "My Resume" icon = {<BsInfoCircleFill size = {40}/>}/>
            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">
                        Experinece
                    </h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var(--theme-main-color)">
                        {data.experience.map((item, i) => {
                            <VerticalTimeline key = {i} className="timeline__experience__vertical-timeline-element">
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title-wrapper">
                                        {item.title}
                                    </h3>

                                    <h4 className="vertical-timeline-element-subtitle"></h4>
                                </div>
                            </VerticalTimeline>
                        })}
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">
                        Education
                    </h3>
                </div>
            </div>
        </section>
    )
}
export default Resume;