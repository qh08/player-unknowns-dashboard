import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '@/component/sidebar';
import MainBody from '@/component/mainbody';
import style from '@/style/dashboard.less';

const dashboard = props => {
    return (
        <div className={style.main}>
            <Sidebar/>
            <MainBody/>
        </div>
    );
};

dashboard.propTypes = {};

export default dashboard;