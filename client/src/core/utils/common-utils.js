import AboutMe from '../../PortfolioContainer/AboutMe/AboutMe';
import Home from '../../PortfolioContainer/Home/Home';
import Resume from '../../PortfolioContainer/Resume/Resume';
import ContactMe from '../../PortfolioContainer/ContactMe/ContactMe';

export const TOTAL_SCREENS = [{
    screen_name: 'Home',
    component: Home
}, {
    screen_name: 'About Me',
    component: AboutMe
}, {
    screen_name: 'Resume',
    component: Resume
}, {
    screen_name: 'Contact Me',
    component: ContactMe
}];

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) { return -1; }
    let index = TOTAL_SCREENS.findIndex(screen => (screen.screen_name === screen_name));
    if (index >= 0) { return index; }
    return -1;
}