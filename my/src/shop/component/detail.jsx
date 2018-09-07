import React, { Component } from 'react'
import '../mock/index.jsx';
import {
    Route
} from 'react-router-dom';
import {connect} from 'react-redux';
import * as  CreateReduxAction from '../store/shop.action.jsx';
import {bindActionCreators} from 'redux'
import Header from './header.jsx';
import Axios from 'axios';
class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            getData:null
        }
    }
    componentDidMount(){
        let{
            match:{
                params
            },
            DetailData,
            IData
        }=this.props
        //redux 方法获取数据 有问题
       //DetailData(params.id)
        // if(IData!=null){
        //     this.setState({
        //         getData:IData[params.id]
        //     })
        // }
        DetailData(params.id)
        
    }
    render() {
        //redux获取的数据
        let{
            DData
        }=this.props
        return (
            <div className='mack'>
                <Header title='详情页' isShow='true'/>
                <section className='section'>
                    {
                        DData?<dl className='auto'>
                            <dt>
                                 <img src={DData.img} alt=""/>
                            </dt>
                                
                            <dd>
                                <h1>{DData.title}</h1>
                                <p>{DData.time}</p>
                            </dd>
                        </dl>:<p>加载中。。。</p>
                    }
                </section>
            </div>
        )
    }
}
const mapStateToProps=(store)=>({...store.SaveFruit})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...CreateReduxAction},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Detail);
