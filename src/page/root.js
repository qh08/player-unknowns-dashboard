import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import classnames from 'classnames';

import {Row, Col} from '@/component/grid';
import Navbar from '@/component/navbar';
import Welcome from '@/page/welcome';
import About from '@/page/about';
import Game from '@/page/game';

import style from '@/style/root.less';

const sidebarStyle = classnames({'qh-col-md-6': true});

const mainContentStyle = classnames({'qh-col-md-18': true});

const root = props => {
    return (
        <div>
            <Row>
                <Col span={{xs:24,sm:24,md:6}}>
                    <Navbar/>
                </Col>
                <Col>
                    <Route path='/' component={Welcome} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/game/:id" component={Game}/>
                </Col>
            </Row>
        </div>
    );
};

root.propTypes = {};

export default root;