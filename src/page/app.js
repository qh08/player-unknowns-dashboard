import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Root from '@/page/root';
import About from '@/page/about';
import Game from '@/page/game';

const app = props => {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/about">关于</Link>
                        </li>
                        <li>
                            <Link to="/game/1">游戏</Link>
                        </li>
                    </ul>
                    <Route exact path='/' component={Root}/>
                    <Route path='/about' component={About}/>
                    <Route path='/game/:id' component={Game}/>
                </div>
            </Router>
        </div>
    );
};

export default app;