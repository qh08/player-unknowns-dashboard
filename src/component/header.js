import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@/component/icon';

import style from '@/style/header.less';

const header = props => {
    return (
        <div className={style.main}>
            <Icon className={style.logo} name='align-justify' size='2x'/>
            header
        </div>
    );
};

header.propTypes = {};

export default header;