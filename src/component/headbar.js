import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Row, Col} from '@/component/grid';
import Icon from '@/component/iconfont';

import style from '@/style/headbar.less';

const headbar = props => {
    return (
        <div className={style.main}>
            <div className={style.logoDiv}>
                <Icon className={style.logo} name='align-justify' size='2x'/>
            </div>
            header
        </div>
    );
};

headbar.propTypes = {};

export default headbar;