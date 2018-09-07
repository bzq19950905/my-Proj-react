import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as  CreateReduxAction from '../store/shop.action.jsx';
import {bindActionCreators} from 'redux'
import{
    NavLink
} from 'react-router-dom'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import '../css/index.css';
//头部
import Header from './header.jsx';
//form
import Form from './form.jsx';
//首页
import Shouye from './shouye.jsx';
//分类
import Screen from './screen.jsx';
//购物车
import Shopping from './shopping.jsx';
//我的
import My from './my.jsx';
//详情页
import Detail from './detail.jsx';
class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            getData:[],
            homeData:[]
        }
       
    }
    componentDidMount(){
        console.log(this.props)
        this.props.IndexData()
        
    }
    render() {
        let{
            IData
        }=this.props
        return (
            <div className='wrap'>
                <Header title='717商城网' />
                <Form />
              
               
                <BrowserRouter>
                <div className='bodybox'>
                <section className='section'>
                        <Switch>
                         <Route path='/home/shouye' render={()=><Shouye ShouyeData={IData}/>} exact/>
                         <Route path='/home/screen' component={Screen} />
                         <Route path='/home/shopping' component={Shopping} />
                         <Route path='/home/my' component={My} />
                         
                         <Route path='/home/detail/:id' component={Detail} exact/>
                        </Switch>
                </section>
                <footer className='footer'>
                    <NavLink to='/home/shouye' activeClassName='active'>
                    <i className="icon iconfont icon-shouye"></i> 
                        <b>首页</b>
                    </NavLink>
                    <NavLink to='/home/screen' activeClassName='active'>
                    <i className="icon iconfont icon-fenlei"></i> 
                        <b>分类</b>
                    </NavLink>
                    <NavLink to='/home/shopping' activeClassName='active'>
                    <i className="icon iconfont icon-gouwuche"></i> 
                        <b>购物车</b>
                    </NavLink>
                    <NavLink to='/home/my' activeClassName='active'>
                    <i className="icon iconfont icon-wode"></i> 
                        <b> 我的</b>
                    </NavLink>
                </footer>
                </div>
                </BrowserRouter>
         
           
           
            </div>
        )
    }
}
const mapStateToProps=(store)=>({...store.SaveFruit})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...CreateReduxAction},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Index);
