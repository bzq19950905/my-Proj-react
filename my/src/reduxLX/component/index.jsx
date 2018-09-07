import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as StoreAction from '../store/store.Action'
class Index extends Component {
    componentDidMount(){
        console.log(this.props,'DidMount')
        let {
            InitHello
        }=this.props
        InitHello('2018/8-23')
    }
    render() {
        console.log(this.props)
        let {
            Hello
        }=this.props
        return (
            <div>
                {
                    Hello
                }
            </div>
        )
    }
}
const mapStoreToProps=(store)=>({...store.StoreReduce})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...StoreAction},dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Index)
