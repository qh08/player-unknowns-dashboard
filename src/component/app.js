import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router} from 'react-router-dom';

import Headbar from '@/component/headbar';
import Sidebar from '@/component/sidebar';
import Content from '@/component/content';

import style from '@/style/app.less';

const app = props => {
    return (
        <Router>
            <div className={style.main}>
                <div className={style.left}>
                    <Sidebar/>
                </div>
                <div className={style.right}>
                    <Headbar/>
                    <Content/>
                </div>
            </div>
        </Router>
    );
};

app.propTypes = {};

export default app;