import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Root from '@/page/root';

ReactDom.render(
    <Router><Root/></Router>, document.getElementById('app'));