import React, { Component } from 'react';
import './styles.css';
import WomenTraining from '../../images/womenTraining.jpg';
import Button from '@material-ui/core/Button';
import StudioClass from '../../images/studioClass.jpg';
import Gym from '../../images/gym.jpg';
import Cardio from '../../images/cardio.jpg';
import HighIntensity from '../../images/highIntensity.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faYoutube } from '@fortawesome/fontawesome-free-brands';
import { faPinterest } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faSpotify } from '@fortawesome/fontawesome-free-brands';


export default class Women extends Component {
    render() {
        return (
            <div>
                <div className='womenTraining-container'>
                    <img src={WomenTraining} className='womenTraining'/>
                    <p className='line1'>THE NEW</p>
                    <p className='line2'>INDY LOGO BRA</p>
                    <p className='line3'>Our newest sports bra delivers elegant</p>
                    <p className='line4'>support for yoga, barre and beyond.</p>
                    <Button variant="outlined" href='https://www.google.com' className='button'>
                    FIND A STORE
                    </Button>
                    <p className='pick-workout'>PICK YOUR WORKOUT, FIND YOUR SHOES</p>
                </div>

                <div className='container'>

                    <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gridColumnGap:'10px'}}>

                        <div className='col1'>
                            <img src={StudioClass} className='studioClass' />
                            <p className='title'>STUDIO CLASSES</p>
                            <p className='examples'>YOGA/BARRE/PILATES</p>
                            <p className='description'>Move confidently in the studio with flexible protection and extra grip for a better-than-barefoot feel.</p>
                        </div>

                        <div className='col2'>
                            <img src={Gym} className='gym'/>
                            <p className='title'>GYM WORKOUTS</p>
                            <p className='examples'>STRENGTH TRAINING/FREE WEIGHTS/CARDIO MACHINES</p>
                            <p className='description'>Step it up at the gym in versatile shoes that deliver locked-down support with a stable but flexible feel.</p>
                        </div>

                        <div className='col3'>
                            <img src={Cardio} className='cardio'/>
                            <p className='title'>CARDIO</p>
                            <p className='examples'>SHORT RUNS/DANCE/KICKBOXING/CIRCUITS</p>
                            <p className='description'>Keep your feet moving with snug support and flexible soles made for those pivots, jumps, kicks and sprints.</p>
                        </div>

                        <div className='col4'>
                            <img src={HighIntensity} className='highIntensity'/>
                            <p className='title'>HIGH INTENSITY</p>
                            <p className='examples'>HIIT/WEIGHTLIFTING</p>
                            <p className='description'>Get the stability you need for power moves with a super supportive fit and responsive soles with tons of grip.</p>
                        </div>

                    </div>
                </div>

                <div className='groupWomen'>
                    <Button variant="outlined" className='button2'>
                        LEARN MORE
                    </Button>
                </div>
                
                <div style={{margin: '40px 0'}}>
                    <p className='title2'>FREE NIKE+ TRAINING APP</p>
                    <p className='description2'>Get better with the best. Nike Master Trainers and Athletes deliver expertise and motivation to get fit</p>
                </div>

                <div className='socialMedia'>
                    <p className='followNikeWomen'>FOLLOW NIKE WOMEN</p>
                    <FontAwesomeIcon icon={faFacebook} className='facebook'/>
                    <FontAwesomeIcon icon={faTwitter} className='twitter'/>
                    <FontAwesomeIcon icon={faYoutube} className='youtube'/>
                    <FontAwesomeIcon icon={faPinterest} className='pinterest'/>
                    <FontAwesomeIcon icon={faInstagram} className='instagram'/>
                    <FontAwesomeIcon icon={faSpotify} className='spotify'/>
                </div>
                
            </div>
        )
    }
}
