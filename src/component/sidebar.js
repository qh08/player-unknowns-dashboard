import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import style from '@/style/sidebar.less';

const sidebar = props => {
    return (
        <div className={style.sidebar}>
            <ul className={style.ul}>
                <li>
                    <Link to="/dashboard/game/1">游戏</Link>
                </li>
            </ul>
        </div>
    );
};

sidebar.propTypes = {};

export default sidebar;