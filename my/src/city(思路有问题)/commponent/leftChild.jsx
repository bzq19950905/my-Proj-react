import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
import * as storeAction from '../store/store.Action'
import '../css/incdex.css'
class LeftChild extends Component {
    componentDidMount(){
        //console.log(this.props)
    }
    changeId=()=>{
        let {
            leftChild,
            changeList_Id
        }=this.props
        changeList_Id(leftChild)
        //console.log(this.props)
    }
    render() {
        let {
            leftChild,
            active
        }=this.props
        return (
            <li data-id={leftChild.code} onClick={this.changeId} className={leftChild.id==active?'active':null}>
                 {
                     leftChild.name
                 }
            </li>
        )
    }
}
const mapStoreToProps=(store)=>({...store.storeReduce})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...storeAction},dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(LeftChild)
