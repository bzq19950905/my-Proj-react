import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom'
import Index from '../component/index.jsx';
export default class componentName extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' render={()=><Redirect to='/init'/>} exact/>
                    <Route path='/init' component={Index} />
                </Switch>
            </Router>
        )
    }
}
