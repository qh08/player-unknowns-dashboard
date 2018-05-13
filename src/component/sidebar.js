import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import style from '@/style/sidebar.less';

const sidebar = props => {
    return (
        <div className={style.sidebar}>
            <div className={style.logo}>logo</div>
            <ul className={style.ul}>
                <li>
                    <Link to="/dashboard/basic">基本数据</Link>
                </li>
                <li>
                    <Link to="/dashboard/advanced">高阶数据</Link>
                </li>
            </ul>
        </div>
    );
};

sidebar.propTypes = {};

export default sidebar;