import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

import {Row, Col} from '@/component/grid';
import Welcome from '@/page/welcome';
import About from '@/page/about';
import Game from '@/page/game';

const content = props => {
    return (
        <div>
            <Row>
                <Col xs={24} sm={24} md={18}>
                    <Route path='/' component={Welcome} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/game/:id" component={Game}/>
                </Col>
            </Row>
        </div>
    );
};

content.propTypes = {};

export default content;