/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Profile.scss";
import Typical from 'react-typical';
import ScrollService from "../../../core/services/scroll-service";

const Profile = ({ renderTypical }) => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/pratheeksh-joseph-0576ba104/">
                                <i class="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://github.com/pratheekshej">
                                <i className="fa fa-github-square"></i>{" "}
                            </a>
                            <a href="https://www.instagram.com/pratheekshej/">
                                <i className="fa fa-instagram"></i>{" "}
                            </a>
                            {/* <a href="#">
                                <i className="fa fa-google-plus-square"></i>{" "}
                            </a> */}
                            {/* <a href="#">
                                <i className="fa fa-youtube-square"></i>{" "}
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>{" "}
                            </a> */}
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I'm <span className="highlighted-text">Pratheeksh Joseph</span> and I am
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                {
                                    (renderTypical) ?
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "a React/Angular Dev", 1000,
                                                "Enthusiastic", 1000,
                                                "Detail Oriented", 1000,
                                                "Collaborative", 1000,
                                                "Focused", 1000
                                            ]}
                                        /> : null
                                }
                            </h1>
                            <span className="profile-role-tagline">
                                I can give life to your ideas with crisp clarity and authenticity.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button
                            className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            Hire Me
                        </button>
                        <a href="Pratheeksh Joseph - Senior Engineer.pdf" download={'Pratheeksh Joseph - Resume.pdf'}>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Profile);
