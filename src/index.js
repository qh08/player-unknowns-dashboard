import React from 'react';
import ReactDom from 'react-dom';
import {Router} from 'react-router';
import routerConfig from '@/config/router.js';

ReactDom.render(
    <div>Hello React!</div>, document.getElementById('app'));

React.render(<Router routes={routerConfig}/>, document.getElementById('app'));