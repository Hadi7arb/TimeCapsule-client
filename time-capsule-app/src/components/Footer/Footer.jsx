import React from 'react';
import './Footer-module.css';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';
import instagramIcon from '../../assets/instagram.svg';
import youtubeIcon from '../../assets/youtube.svg';


const Footer = () => {

    return (
        <footer>
            <div>
               <h4>"The future reads what the present writes."</h4>
               <h5>Start your capsule or view stories shared by others.</h5> 
            </div>

            <div>
                <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
                <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
                <a href="#"><img src={youtubeIcon} alt="youtube" /></a>
            </div>
            
        </footer>
    );


}

export default Footer;