import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
//登录页
import Index from '../component/index.jsx';
//列表页
import List from '../component/list.jsx';
//注册页
import Register from '../component/register.jsx';
export default class extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <Switch>
                    <Route path='/' component={Index} exact={true}/>
                    <Route path='/register' component={Register} />
                    <Route path='/list' component={List} />
                </Switch>        
                </div>
            </BrowserRouter>
        )
    }
}
