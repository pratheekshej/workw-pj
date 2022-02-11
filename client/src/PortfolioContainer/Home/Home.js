import React from 'react'
import Profile from './Profile/Profile';
// import Footer from './Footer/Footer';
import "./Home.scss";
import Header from './Header/Header';

const Home = (props) => {
    return (
        <div className='home-container gradient__bg' id={props.id || ""}>
            <Header />
            <Profile />
            {/* <Footer /> */}
        </div>
    )
};

export default Home;
