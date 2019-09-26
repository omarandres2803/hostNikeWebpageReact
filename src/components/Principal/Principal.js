import React, { Component } from 'react';
import justDoIt from '../../images/justDoIt.jpg';
import nikeNba from '../../images/nikenba.jpg';
import {Fragment} from 'react';
import './styles.css';
import CssBaseline from "@material-ui/core/CssBaseline";

export default class Principal extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <div className='image1-parent'>
                    <img src={justDoIt} className='justDoIt'/>
                    <p className='text-image'>PLAY FIRE. PLAY ICE.</p>
                    <p className='p1-image'>It's time to pick a side. Football belongs to two kinds of players:</p>
                    <p className='p2-image'>those who light up the pitch and those who let ice-cold instincts take over.</p>
                </div>
                
                <div className='image2-parent'>
                    <img src={nikeNba} className='basketShoes'/>
                    <p className='p1-image2'>WANT IT ALL</p>
                    <p className='p2-image2'>From the neighbourhood streets to the NBA court, Donte wants it all.</p>
                    <a className='a-image2' href='https://www.nike.com/xf/en_gb'>Watch the film</a>
                </div>
                
            </Fragment>
        )
    }
}
