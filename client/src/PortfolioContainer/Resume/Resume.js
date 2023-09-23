/* eslint-disable no-unused-vars */
import React, { useState, useRef, Fragment } from 'react';
import ScreenHeading from '../../core/components/ScreenHeading/ScreenHeading';
import ScrollService from '../../core/services/scroll-service';
import Animations from '../../core/utils/animations';
import './Resume.scss';
import { projectDetails, workExperience } from './ResumeContent';

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
    const projectContainerRef = useRef();
    const workHistoryContainerRef = useRef();
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) { return; }
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubsription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='marks'></div>
                    <div className='heading-bullet'>
                        <span>{props.heading ? props.heading : ''}</span>
                        {
                            (props.fromDate && props.toDate) ?
                                <div className='heading-date'>
                                    {props.fromDate + "-" + props.toDate}
                                </div> :
                                <div></div>
                        }
                    </div>
                    <div className='resume-sub-heading'>
                        <span>{props.feSubHeading ? props.feSubHeading : props.subHeading}</span>
                    </div>
                    {
                        props.beSubHeading ?
                            <div className='resume-sub-heading'>
                                <span>{props.beSubHeading ? props.beSubHeading : ''}</span>
                            </div> : null
                    }
                    <div className='resume-heading-description'>
                        <span>{props.description ? props.description : ''}</span>
                    </div>
                </div>
            </div>
        );
    };
    const resumeBullets = [
        { label: 'Education', logoSrc: "education.svg" },
        { label: 'Work History', logoSrc: "work-history.svg" },
        { label: 'Programming Skills', logoSrc: "programming-skills.svg" },
        { label: 'Projects', logoSrc: "projects.svg" },
        { label: 'Interests', logoSrc: "interests.svg" }
    ];
    const programmingSkillDetails = [
        { skill: "ReactJS/React Redux", ratingPercentage: 90 },
        { skill: "Angular", ratingPercentage: 80 },
        { skill: "JavaScript", ratingPercentage: 80 },
        { skill: "HTML", ratingPercentage: 85 },
        { skill: "CSS", ratingPercentage: 80 },
        { skill: "SASS/SCSS", ratingPercentage: 85 },
        { skill: "Core Java", ratingPercentage: 70 }
    ];
    const resumeDetails = [
        <div className='resume-screen-container education-container' key={'education'}>
            <ResumeHeading
                heading={"Bangalore University, Bangalore, Karnataka, India"}
                subHeading={"Master of Computer Applications"}
                fromDate={"2012"}
                toDate={"2015"}
            />
            <ResumeHeading
                heading={"Kannur University, Iritty, Kerala, India"}
                subHeading={"Bachelor of Science in Mathematics"}
                fromDate={"2009"}
                toDate={"2012"}
            />
            <ResumeHeading
                heading={"High School, Ernakulam, India"}
                subHeading={"Don Bosco Senior Secondary School"}
                fromDate={"2007"}
                toDate={"2009"}
            />
        </div>,
        <div ref={workHistoryContainerRef} className='resume-screen-container work-experience-container' key={'work-experience'}>
            {
                workExperience.map((exp, index) => {
                    const { heading, subHeading, fromDate, toDate } = exp.resumeHeadingProps;
                    const singleDesc = (
                        <div className='experience-description'>
                            <div className='resume-description-text'>
                                {exp.singleDescText}
                            </div>
                        </div>
                    );
                    const multiDesc = (
                        exp.multiDescTexts.map((desc, i) => (
                            <div key={i} className='experience-description'>
                                <div className='resume-description-text'>
                                    {desc.descText}
                                </div>
                            </div>
                        ))
                    );
                    return (
                        <Fragment key={index}>
                            <ResumeHeading
                                heading={heading}
                                subHeading={subHeading}
                                fromDate={fromDate}
                                toDate={toDate}
                            />
                            {singleDesc}
                            {multiDesc}
                        </Fragment>
                    );
                })
            }
        </div>,
        <div className='resume-screen-container programming-skills-container' key={'programming-skills'}>
            {
                programmingSkillDetails.map((skill, index) => (
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span title={skill.skill}>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div style={{ width: skill.ratingPercentage + "%" }} className='active-percentage'></div>
                        </div>
                    </div>
                ))
            }
        </div>,
        <div ref={projectContainerRef} className='resume-screen-container projects' key={'projects'}>
            {
                projectDetails.map((project, index) => (
                    <ResumeHeading
                        key={index}
                        heading={project.title}
                        subHeading={project.subHeading}
                        feSubHeading={project.feSubHeading}
                        beSubHeading={project.beSubHeading}
                        description={project.description}
                        fromDate={project.duration?.fromDate}
                        toDate={project.duration?.toDate}
                    />
                ))
            }
        </div>,
        <div className='resume-screen-container interests' key={'interests'}>
            <ResumeHeading heading="Music" description="I spend my free time listening to music and playing keyboard and compose melody tracks mostly." />
            <ResumeHeading heading="Learning" description="Learning an interesting technology which is evolving is something that I very much like to do." />
            <ResumeHeading heading="Trips" description="I go out for trips on weekends basically." />
            <ResumeHeading heading="Movies" description="I'm interested in science fiction and suspense thriller movies coz they can literally enhance your thought process." />
        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 500;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
        carousalSections(index);
    }

    const carousalSections = (index) => {
        let resumeSection = resumeBullets[index]['label'];
        switch (resumeSection) {
            case 'Projects':
                if (resumeSection === 'Projects') {
                    projectContainerRef.current.scrollTo(0, 0);
                } else {
                    projectContainerRef.current.scrollTo(0, projectContainerRef.current.scrollHeight);
                }
                break;
            case 'Work History':
                if (resumeSection === 'Work History') {
                    workHistoryContainerRef.current.scrollTo(0, 0);
                } else {
                    workHistoryContainerRef.current.scrollTo(0, workHistoryContainerRef.current.scrollHeight);
                }
                break;
            default:
                break;
        }
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                key={index}
                className={(index === selectedBulletIndex) ? "bullet selected-bullet" : "bullet"}
                onClick={() => handleCarousal(index)}>
                <img
                    className='bullet-logo'
                    src={require(`../../assets/resume/${bullet.logoSrc}`)}
                    alt='oops,,, no internet connection' />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ));
    }

    const getResumeScreen = () => {
        return (
            <div style={carousalOffSetStyle['style']}
                className='resume-details-carousal'>
                {resumeDetails.map((resume) => resume)}
            </div>
        );
    }

    return (
        <div className='resume-container screen-container fade-in' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
