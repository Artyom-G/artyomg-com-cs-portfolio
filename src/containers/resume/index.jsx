import React from 'react';
import resumePdf from './resume.pdf';
import './styles.scss';

const Resume = () => {
    return (
        <div className='alt2'>
            <h2>Resume</h2>
            <div className='resumePdf'>
                <embed src={resumePdf} type="application/pdf"/>
            </div>
        </div>
    );
};

export default Resume;