import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
//首页
import Index from '../component/index.jsx';
//List页
import List from '../component/list.jsx';
//Detail页
import Detail from '../component/detail.jsx';


export default class componentName extends Component {
    render() {
        return (
           <BrowserRouter>
                <div>
                    <Switch>
                 
                    <Route path='/list' component={goDetail}/>
                    <Route path='/' component={Index} exact={true}/>
                    </Switch>
                </div>
           </BrowserRouter>
        )
    }
}
//lsit下的子路由
const goDetail=({match})=>{
    return(
        <div>
             <Route path={`${match.url}/`} component={List} exact={true}/>
             
             <Route path={`${match.url}/detail`} component={Detail}/>
             {/* 路由重定向  */}
             {/* <Route path={`${match.url}/detail`} render={()=><Redirect to='/'/>}/> */}
         </div>   
    )
}