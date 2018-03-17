import React from 'react';
import PropTypes from 'prop-types';

const navbar = props => {
    return (
        <div>
            <ul>
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