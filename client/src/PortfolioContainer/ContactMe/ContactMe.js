/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './ContactMe.scss';
import imgBackg from '../../../src/assets/images/mailz.jpeg';
import load1 from '../../../src/assets/images/load2.gif';
import ScreenHeading from '../../core/components/ScreenHeading/ScreenHeading';
import ScrollService from '../../core/services/scroll-service';
import Animations from '../../core/utils/animations';
import Typical from 'react-typical'
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactMe = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [boolean, setBoolean] = useState(false);

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) { return; }
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubsription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let data = { name, email, message };
            setBoolean(true);
            const res = await axios.post('/contact', data);
            if (!(name.length && email.length && message.length)) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBoolean(false);
            } else if (res.data.msg) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBoolean(false);
                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='main-container fade-in' id={props.id || ''}>
            <ScreenHeading
                subHeading='Lets keep in touch'
                title='Contact Me'
            />
            <div className='central-form'>
                <div className='col'>
                    <h2 className='title'>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Get In Touch", 1000
                            ]}
                        />
                    </h2>
                    <div>
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
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-google-plus-square"></i>{" "}
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram"></i>{" "}
                        </a>
                        <a href="#">
                            <i className="fa fa-youtube-square"></i>{" "}
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>{" "}
                        </a> */}
                    </div>
                </div>
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send Your Email Here</h4>
                        <img src={imgBackg} alt='No Image Found' />
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />

                        <label htmlFor='email'>Email</label>
                        <input type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor='message'>Message</label>
                        <textarea type={'text'} value={message} onChange={(e) => setMessage(e.target.value)} />

                        <div className='send-btn'>
                            <button type='submit'>
                                send
                                <i className='fa fa-paper-plane'>
                                    {
                                        boolean ?
                                            <b className='load'>
                                                <img src={load1} alt='image not responding' />
                                            </b> :
                                            ""
                                    }
                                </i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
