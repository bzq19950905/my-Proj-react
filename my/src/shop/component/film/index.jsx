import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as  CreateReduxAction from '../../store/film/film.action.jsx';
import {bindActionCreators} from 'redux'
import '../../css/film.css';
import {
    NavLink,
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import One from './one.jsx';
import Two from './two.jsx';
import Three from './three.jsx';
import FilmDetail from './oneDetail.jsx';
class Film extends Component {
    componentDidMount(){
        let{
            FilmData
        }=this.props
        FilmData()
    }
    render() {
        let{
            match:{
                url
            },
            FData
        }=this.props
        return (
            <div className='wrap'>
                <BrowserRouter>
                <div className="bodybox">
                <section className='section'>
                    <Switch>
                        <Route path={`${url}`} render={()=> {return <Redirect to={`${url}/one`}/>}} exact/>
                        <Route path={`${url}/one`} render={()=><One OneData={FData}/>} />
                        <Route path={`${url}/two`}  component={Two} />
                        <Route path={`${url}/three`}  component={Three} />
                        <Route path={`${url}/detail/:id/:nm`} component={FilmDetail}/>
                    </Switch>
                </section>
                <footer className='footer'>
                    <NavLink to={`${url}/one`} activeClassName='active'>
                    <i className="icon iconfont icon-shouye"></i> 
                        <b>电影</b>
                    </NavLink>
                    <NavLink to={`${url}/two`} activeClassName='active'>
                    <i className="icon iconfont icon-gouwuche"></i> 
                        <b>影院</b>
                    </NavLink>
                    <NavLink to={`${url}/three`} activeClassName='active'>
                    <i className="icon iconfont icon-wode"></i> 
                        <b>我的</b>
                    </NavLink>
                </footer>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}
const mapStateToProps=(store)=>({...store.FilmData})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...CreateReduxAction},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Film);