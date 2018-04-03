import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@/component/iconfont';

import style from '@/style/headbar.less';

const headbar = props => {
    return (
        <div className={style.headbar}>
            <Icon className={style.logo} name='align-justify' size='2x'/>
            header
        </div>
    );
};

headbar.propTypes = {};

export default headbar;