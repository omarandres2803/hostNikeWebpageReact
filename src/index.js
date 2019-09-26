import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import Nike from './components/Nike/Nike';
import Principal from './components/Principal/Principal';
import AppBar from '../src/components/Principal/AppBar';
import Footer from '../src/components/Footer/Footer';


const Root = (
    <BrowserRouter>
        <AppBar/>
        <Switch>
            <Route path="/principal" component={Principal}/>
            <Route path="/men" component={Men}/>
            <Route path="/women" component={Women}/>
            <Route path="/principal" component={Nike}/>
            <Redirect from='/' to='/principal'/>
        </Switch>
        <Footer />
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));