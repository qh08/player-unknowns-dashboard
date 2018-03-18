import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

import Navbar from '@/component/navbar';
import Welcome from '@/page/welcome';
import About from '@/page/about';
import Game from '@/page/game';

const root = props => {
    return (
        <div>
            <Navbar/>
            <Route path='/' component={Welcome} exact/>
            <Route path="/about" component={About}/>
            <Route path="/game/:id" component={Game}/>
        </div>
    );
};

root.propTypes = {
    
};

export default root;