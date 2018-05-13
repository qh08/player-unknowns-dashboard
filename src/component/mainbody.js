import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Row, Col} from '@/component/ui/grid/index';
import Header from '@/component/header';
import Welcome from '@/page/welcome';
import About from '@/page/about';
import DashboardBasic from '@/page/dashboardBasic';
import DashboardAdvanced from '@/page/dashboardAdvanced';
import User from '@/page/user';

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
                    <Route path="/dashboard/user" component={User}/>
                </Col>
            </Row>
        </div>
    );
};

mainbody.propTypes = {};

export default mainbody;