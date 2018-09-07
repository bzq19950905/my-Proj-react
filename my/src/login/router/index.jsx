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
//详情页
import Detail from '../component/detail.jsx';

let Style={
    width:'100%',
    height:'100%'
}
export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={Style}>
                    <Switch>
                        <Route path='/' component={Index} exact={true}/>
                        <Route path='/list' component={goList}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
const goList=({match})=>{
    return (
        <div>
            <Route path={`${match.url}/`} component={List} exact={true} />
            <Route path={`${match.url}/detail`} component={Detail}  />
        </div>
    )
}
