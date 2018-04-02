import React from 'react';
import PropTypes from 'prop-types';
import FA from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.min.css';

const iconfont = props => {
    return (
        <FA name={props.name} cssModule={faStyles} size={props.size} className={props.className}/>
    );
};

// <FontAwesome
//         className="super-crazy-colors"
//         name="rocket"
//         size="2x"
//         spin
//         style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
//       />

iconfont.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    style: PropTypes.object
};

export default iconfont;