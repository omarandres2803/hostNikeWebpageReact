import React, { Component, Fragment } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/fontawesome-free-brands";
import { faTwitter } from "@fortawesome/fontawesome-free-brands";
import { faYoutube } from "@fortawesome/fontawesome-free-brands";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className='footer-container'>
                <div className='grid'>
                    <div className='column1'>
                        <a href='https://www.nike.com/xf/en_gb/sl/store-locator/'>FIND A STORE</a>
                        <a href='https://secure-nikeplus.nike.com/plus/login?register=true'>BECOME A MEMBER</a>
                    </div>

                    <div className='column2'>
                        <a href='https://www.nike.com/xf/en_gb/'>CONTACT US</a>
                    </div>

                    <div className='column3'>
                        <a href='#'><b>ABOUT NIKE</b></a>
                        <a href='#'>News</a>
                        <a href='#'>Careers</a>
                        <a href='#'>Investors</a>
                    </div>

                    
                    <div className='column4'>
                    <FontAwesomeIcon icon={faFacebook} className='media-icon' />
                    <FontAwesomeIcon icon={faTwitter} className='media-icon'/>
                    <FontAwesomeIcon icon={faYoutube} className='media-icon'/>
                    <FontAwesomeIcon icon={faInstagram} className='media-icon'/>
                    </div>
                    </div>
                    <hr/>
                    <p className='white'>© 2019 Nike, Inc. All Rights Reserved</p>
                </div>
            </Fragment>
        )
    }
}
