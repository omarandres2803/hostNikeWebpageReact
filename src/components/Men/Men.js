import React, { Component } from 'react';
import './styles.css';
import MenBoots from '../../images/hombres.jpg';
import { createRequireFromPath } from 'module';

export default class Men extends Component {
    render() {
        return (
            <div >
                <div className='menBoots-container'>
                <img src={MenBoots} className='menBoots'/>
                <p className='p1-menBoots'>PLAY FIRE. PLAY ICE.</p>
                <p className='p2-menBoots'>It's time to pick a side. Football belongs to two kinds of players:</p>
                <p className='p3-menBoots'>those who light up the pitch and those who let ice-cold instincts take over.</p>
                </div>
                <div className='container'>
                <h3 style={{fontFamily: 'Oswald', margin: '20px',}}>LATEST BOOTS</h3>
                    <div style={{display: 'grid', gridColumnGap: '10px', gridTemplateColumns: 'calc(25% - 10px) calc(25% - 10px) calc(25% - 10px) calc(25% - 10px)'}}>
                        <div className='imagen1'>
                            <p>FIRE</p>
                        </div>
                        <div className='imagen2'>
                            <p>ICE</p>
                        </div>
                        <div className='imagen3'>
                            <p><b>CR</b>7</p>
                        </div>
                        <div className='imagen4'>
                            <p>BLACK BOOTS</p>
                        </div>
                    </div>
                    <h3 style={{fontFamily: 'Oswald', margin: '20px',}}>FEATURED</h3>
                    <div style={{display : 'grid',gridColumnGap: '10px'}}>
                        <div className='featured1'></div>
                        <div className='featured2'></div>
                    </div>
                    <div style={{display : 'grid',gridColumnGap: '10px', gridTemplateColumns: '1fr 1fr'}}>
                        <div className='featured1-text'>
                            <p className='play-paris'>PLAY PARIS</p>
                            <p className='intro'>Introducing the new Paris Saint-Germain Nike Vapor Third Kit.</p>
                            <p className='find-store'><a href='https://www.nike.com/xf/en_gb/sl/store-locator/'>Find a Store</a></p>
                        </div>
                        <div className='featured2-text'>
                            <p className='nike-foot'>NIKE FOOTBALL TRAINING</p>
                            <p className='line1'>Be ready to play with our on-pitch training apparel.</p>
                            <p className='line2'>Designed to keep you dry and fast in all conditions.</p>
                            <p className='find-store'><a href='https://www.nike.com/xf/en_gb/sl/store-locator/'>Find a Store</a></p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
