import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from 'react-router-dom'
import '../css/index.css';
//列表页
import ListIndex from '../component/list/index.jsx'
//物流
import Logistics from '../component/logistics/index.jsx'
//购物车
import Shopping from '../component/Shopping Cart/index.jsx'
//我的
import My from '../component/my/index.jsx'
//更多
import More from '../component/More/index.jsx'
//详情页
import Detail from '../component/public/detail.jsx'
import React, { Component } from 'react'
import 'antd/dist/antd.css'
export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            SPCNum:0
        }
    }
    changeSPCNum=(num)=>{
        this.setState({
            SPCNum:num
        })
    }
    render() {
        let {
            SPCNum
        }=this.state
        //<Route path='/list' render={()=>{ return<ListIndex changeSPCNum={this.changeSPCNum} />}}/>
        return (
           <Router>
               <div className="wrap">
                <section className="section">
                <Switch>
                <Route path='/list' render={()=><ListIndex changeSPCNum={this.changeSPCNum} />}/>
                        <Route path='/logistics' component={Logistics}/>
                        <Route path='/shopping' component={Shopping}/>
                        <Route path='/my' component={My}/>
                        <Route path='/more' component={More}/>
                        <Route path='/' render={()=><Redirect to='/list'/>} exact/>
                        <Route path='/detail/:id' component={Detail}/>
                        
                   </Switch>
                </section>
                
                   <footer className='footer'>
                        <div className="footer_nav">
                            <NavLink to='/list' activeClassName='footer_nav_active'>
                                <i className="icon iconfont icon-shouye"></i> 
                                <span>首页</span>
                            </NavLink>
                            <NavLink to='/logistics' activeClassName='footer_nav_active'> 
                                <i className="icon iconfont icon-daishouhuo-01"></i> 
                                <span>物流</span>
                            </NavLink>
                            <NavLink to='/shopping' activeClassName='footer_nav_active'>
                                 <i className="icon iconfont icon-gouwuche"></i> 
                                <span>购物车</span>
                                {
                                    SPCNum>0&&<em>{SPCNum}</em>
                                }
                            </NavLink>
                            <NavLink to='/my' activeClassName='footer_nav_active'>
                                <i className="icon iconfont icon-wode"></i> 
                                <span>我的</span>
                            </NavLink>
                            <NavLink to='/more' activeClassName='footer_nav_active'>
                                <i className="icon iconfont icon-gengduo"></i> 
                                <span>更多</span>
                            </NavLink>
                   
                        </div>
                      
                    </footer>
                </div>
           
           </Router>
        )
    }
}
