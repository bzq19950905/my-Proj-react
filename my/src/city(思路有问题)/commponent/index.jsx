import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
import * as storeAction from '../store/store.Action'
import '../css/incdex.css'
import List from './list.jsx';
class Index extends Component {
    componentDidMount(){
        //console.log(this.props)
        this.props.InitData()
    }
    render() {
        let {
            IData
        }=this.props
        //console.log(this.props,'111111')
        return (
            <div className='wrap'>
               {
                   IData?<List getData={IData}/>:<p>加载中。。。</p>
               }
            </div>
        )
    }
}
const mapStoreToProps=(store)=>({...store.storeReduce})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...storeAction},dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Index)