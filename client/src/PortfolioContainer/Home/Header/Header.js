/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../core/utils/common-utils';
import ScrollService from '../../../core/services/scroll-service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = ({ screen }) => {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) { return; }
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        setSelectedScreen(screenIndex);
        if (screenIndex < 0) { return; }
    }

    useEffect(() => {
        ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);
        if (screen) { updateCurrentScreen({ screenInView: screen }); }
    }, [screen]);

    const getHeaderOptionClass = (screenIndex) => {
        let classes = "header-option";
        if (screenIndex < TOTAL_SCREENS.length - 1) {
            classes += " header-option-seperator";
        }
        if (selectedScreen === screenIndex) {
            classes += " selected-header-option";
        }
        return classes;
    }

    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, i) => (
                <div
                    key={screen.screen_name}
                    className={getHeaderOptionClass(i)}
                    onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        );
    }

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) { return; }
        screenComponent.scrollIntoView({ behavior: 'smooth' });
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }

    return (
        <div className='header-container'>
            <div className='header-parent'>
                <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
                </div>
                <div className='header-logo'>
                    <span>CODER<span className='initial'>PJ</span>~</span>
                </div>
                <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"} onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                    {getHeaderOptions()}
                </div>
            </div>
        </div>
    )
};

export default React.memo(Header);
