import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import r from './resume.json';
import './styles.scss';
import resumePdf from './resume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent headerText = "Resume" icon = {<BsInfoCircleFill size = {40}/>}/>
            <div className="resume__content">
                <div className="resume__content__header">
                    <div className="alt1">
                        <h1>{r.basics.firstName} {r.basics.lastName}</h1>
                        <h3>{r.basics.email}  |  {r.basics.phoneNumber}  |  {r.basics.city}, {r.basics.province}</h3>
                    </div>
                </div>
                <div className="resume__content__body">
                    <div className="alt2">
                        <div className="resume__content__body__education">
                            <h2>Education</h2>
                            <hr/>
                            <ul>
                                {
                                    r.education.map((item, i) =>(
                                        <li key ={i} className="resume__content__body__education__body">
                                            <div className="resume__content__body__education__body__uni">
                                                <p className="resume__content__body__education__body__uni__name">{item.university}</p>
                                                <p className="resume__content__body__education__body__uni__major">{item.degree} of {item.major}</p>
                                                <p className="resume__content__body__education__body__uni__minor">{item.minor} Minor</p>

                                                <ul className="resume__content__body__education__body__uni__tags">
                                                    <li>Ongoing</li>
                                                    <li>Dean's Honour List</li>
                                                    <li>GPA: {item.averageGrade}</li>
                                                </ul>
                                            </div>
                                            <div className="resume__content__body__education__body__unidate">
                                                <p>{item.start} - {item.end}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="alt1">
                    
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
                        
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Resume;