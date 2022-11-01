/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Profile from './Profile/Profile';
// import Footer from './Footer/Footer';
import "./Home.scss";
import Header from './Header/Header';
import ScrollService from '../../core/services/scroll-service';

const Home = (props) => {

    const [renderTypical, setRenderTypical] = useState(true);
    const [screen, setScreen] = useState('Home');

    let screenInView = (screen) => {
        setRenderTypical(true);
        if (screen.fadeInScreen) {
            setScreen(screen.fadeInScreen);
        } else if (screen.screenInView) {
            setScreen(screen.screenInView);
        }
        if (screen.screenInView && (screen.screenInView !== props.id)) {
            setRenderTypical(false);
        }
    }

    useEffect(() => {
        ScrollService.currentScreenBroadCaster.subscribe(screenInView);
        ScrollService.currentScreenFadeIn.subscribe(screenInView);
    }, []);

    return (
        <div className='home-container gradient__bg' id={props.id || ""}>
            <Header screen={screen} />
            <Profile renderTypical={renderTypical} />
            {/* <Footer /> */}
        </div>
    )
};

export default Home;
