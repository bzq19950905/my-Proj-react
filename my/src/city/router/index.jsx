import React, { Component } from 'react'
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import Index from '../commponent/index.jsx'
export default class componentName extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' render={()=><Redirect to='/home'/>} exact/>
                    <Route path='/home' component={Index}/>
                    
                </Switch>
            </Router>
        )
    }
}
