import './styles.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import React, { Component } from 'react'
import { fontFamily } from '@material-ui/system';

export default class Appbar extends Component {
    render() {
        return (
            <div style={{marginBottom: '60px'}}>
                <AppBar position="fixed"  style={{ background: 'white'}}>
                    <Toolbar>
                    <Typography variant="h5" style={{ color: 'black', fontFamily: 'Montserrat', fontWeight: "bold"}}>
                    NikeStore
                    </Typography>
                    <div className='link-container'>
                    <Link to='/Men' className='link'>Men</Link>
                    <Link to='/Women' className='link'>Women</Link>
                    <Link to='/Nike' className='link'>Nike+</Link>
                    </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}



