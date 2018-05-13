import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '@/page/dashboard';
import About from '@/page/about';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/about' component={About}/>
            </Switch>
        </Router>
    )
}

ReactDom.render(
    <App/>, document.getElementById('app'));