import React from 'react';
import './EventHeroSection.scss';
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from '@/styles/root/globals.scss'
const EventHeroSection = () => {
    return (
        <div className= "HeroSection-EventContainer">
            <img src='/Images/Events/color_element.png' className="HeroSection-mainpara-color-element"/>
            <img src='/Images/Events/color_element_2.png' className='HeroSection-mainpara-color-element2' />
            <div className = "HeroSection-EventContainer-Hashtag">
                <p className= "Hero-Hashtag">#EntrepreneurshipClub</p>
            </div>
            <div className="HeroSection-mainpara">
                <p className="HeroSection-mainpara-content">
                    Entrepreneurship Cell, Shiv <br/> Nadar Institution of Eminence
                </p>
                <img src='/Images/Events/underline_vector.png' className='HeroSection-mainpara-underline' />
            </div>
            <div className="HeroSection-subcontent">
                <div className="HeroSection-subpara">
                    <p className="HeroSection-subpara-content">
                        Welcome to our college clubs community! Find your passion and explore new interests with our diverse range of clubs.
                        Connect with like-minded individuals and create unforgettable memories. Join us today and unlock new opportunities for personal and professional growth.
                    </p>
                </div>
                <div className="HeroSection-buttonrow">
                    <p className="HeroSection-buttonrow-btn1">
                        Website Link <span className="HeroSection-buttonrow-btn1-icon"> <IoIosArrowRoundForward/></span>
                    </p>
                    <p  className="HeroSection-buttonrow-btn2" >
                        Instagram <span className="HeroSection-buttonrow-btn1-icon"> <IoIosArrowRoundForward/></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventHeroSection;