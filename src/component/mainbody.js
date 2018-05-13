import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Row, Col} from '@/component/grid';
import Header from '@/component/header';
import Welcome from '@/page/welcome';
import About from '@/page/about';
import DashboardBasic from '@/page/dashboardBasic';
import DashboardAdvanced from '@/page/dashboardAdvanced';

import style from '@/style/mainbody.less';

const mainbody = props => {
    return (
        <div className={style.mainbody}>
            <Row>
                <Col xs={24} sm={24} md={24}>
                    <Header/>
                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={24} md={24}>
                    <Route path="/dashboard/basic" component={DashboardBasic}/>
                    <Route path="/dashboard/advanced" component={DashboardAdvanced}/>
                </Col>
            </Row>
        </div>
    );
};

mainbody.propTypes = {};

export default mainbody;