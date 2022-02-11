/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import ScrollService from "./core/services/scroll-service";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [screenName, setScreenName] = useState('Home');

  let screenBroadcastHandler = useCallback((screen) => {
    setScreenName(screen.screenInView);
  }, []);

  const fadeInSubsription = ScrollService.currentScreenBroadCaster.subscribe(screenBroadcastHandler);

  useEffect(() => {
    gotoHomeSection();
  }, []);

  const gotoHomeSection = () => {
    let screenComponent = document.getElementById('Home');
    if (!screenComponent) { return; }
    screenComponent.scrollIntoView({ behavior: 'smooth' });
  }

  const upArrowToHome = () => {
    return (
      <div className='up-arrrow-container' onClick={gotoHomeSection}>
        <div className='arrow-img'></div>
      </div>
    );
  }

  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      {
        screenName !== 'Home' ?
          upArrowToHome() :
          null
      }
    </div>
  );
};

export default App;
