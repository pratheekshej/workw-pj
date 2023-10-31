/* eslint-disable no-unused-vars */
import React from 'react';
import ScreenHeading from '../../core/components/ScreenHeading/ScreenHeading';
import Animations from '../../core/utils/animations';
import ScrollService from '../../core/services/scroll-service';
import "./AboutMe.scss";

const AboutMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) { return; }
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubsription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANTS = {
        description: `Diligent frontend software engineer with over 7 years of
                    experience in JavaScript programming and front-end engineering.
                    Self-directed with expertise in ReactJS and Angular. Talented at
                    cultivating collaborative and supportive team environment.
                    I'm looking forward to working with challenging environment with
                    cutting edge technologies in application development
                    and data management for mutual benefit and growth and attain new levels of achievements
                    as a distinguished professional within the organization
                    to make valuable contributions to timely delivery of business value.`,
        highlights: {
            heading: "Here are a few highlights",
            bullets: [
                "Web development and front-end coding",
                "Interactive front-end as per the UI/UX design",
                "ReactJS and Angular 5+",
                "RxJS",
                "Web Components",
                "Best programming techniques involving React Hooks",
                "React Redux for state management",
                "Handling REST APIs",
                "JEST framework",
                "HTML5/CSS",
                "SASS/SCSS",
                "D3 JS Customization",
                "Agile Programming",
                "Git/Bitbucket",
                "JIRA"
            ]
        }
    };
    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((val, i) =>
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{val}</span>
                </div>
            )
        );
    }
    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            <div className='highlight-content'>
                                {renderHighlight()}
                            </div>
                        </div>
                        <div className='about-me-options'>
                            <button
                                className="btn primary-btn"
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                Hire Me
                            </button>
                            <a href="Pratheeksh Joseph - Senior Engineer.pdf" download={'Pratheeksh Joseph - Resume.pdf'}>
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
