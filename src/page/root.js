import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import classnames from 'classnames';

import {Row, Col} from '@/component/grid';
import Headbar from '@/component/headbar';
import Sidebar from '@/component/sidebar';
import Welcome from '@/page/welcome';
import About from '@/page/about';
import Game from '@/page/game';

import style from '@/style/root.less';

const root = props => {
    return (
        <div className={style.main}>
            <div className={style.headbar}>
                <Headbar/>
            </div>
            <div className={style.sidebar}>
                <Sidebar/>
            </div>
            <div className={style.content}>
                <Row>
                    <Col xs={24} sm={24} md={18}>
                        <Route path='/' component={Welcome} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/game/:id" component={Game}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

root.propTypes = {};

export default root;