import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import r from './resume.json';
import './styles.scss';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent headerText = "Resume" icon = {<BsInfoCircleFill size = {40}/>}/>
            <div className="resume__content">
                <div className="resume__content__header">
                    <div className="alt1">
                        <h1>{r.firstName} {r.lastName}</h1>
                        <h3>{r.email}  |  {r.phoneNumber}  |  {r.city}, {r.province}</h3>
                    </div>
                </div>
                <div className="resume__content__body">
                    <div className="alt2">
                        <h2>Education</h2>
                        <hr/>
                        <ul>
                            {
                                r.education.map((item, i) =>(
                                    <li key ={i}>
                                        <p>
                                            <b>{item.degree} Degree {item.major} Co-op (Ongoing)</b>
                                        </p>
                                        <p>
                                            {item.university}, {item.city}, {item.province}, GPA: {item.GPA}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <dir className="alt1">
                    
                        <h2>Experience</h2>
                        <hr/>
                        <ul>
                            {
                                r.education.map((item, i) =>(
                                    <li key ={i}>
                                        <p>
                                            <b>{item.degree} Degree {item.major} Co-op (Ongoing)</b>
                                        </p>
                                        <p>
                                            {item.university}, {item.city}, {item.province}, GPA: {item.GPA}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        
                    </dir>
                </div>
            </div>
        </section>
    );
};
export default Resume;