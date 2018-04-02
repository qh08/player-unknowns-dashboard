import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Row, Col} from '@/component/grid';

import style from '@/style/sidebar.less';

const sidebar = props => {
    return (
        <div className={style.main}>
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

sidebar.propTypes = {};

export default sidebar;