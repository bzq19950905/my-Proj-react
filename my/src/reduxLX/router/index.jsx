import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import ListIndex from '../component/index.jsx'
export default class componentName extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/list' component={ListIndex}/>
                    <Route path='/' render={()=><Redirect to='/list'/>}/>
                    
                </Switch>
            </Router>
        )
    }
}
