import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FA from 'react-fontawesome';

import style from './navbar.css';
import faStyles from 'font-awesome/css/font-awesome.css';

const navbar = props => {
    return (
        <div className={style.div}>
            <div>
            <FA name='align-justify' size='2x' cssModule={faStyles}/>
            </div>
            <ul className={style.ul}>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/about">关于</Link>
                </li>
                <li>
                    <Link to="/game/1">游戏</Link>
                </li>
            </ul>
        </div>
    );
};

navbar.propTypes = {};

export default navbar;