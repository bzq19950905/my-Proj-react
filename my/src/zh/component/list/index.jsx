import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as storAction from '../../store/list/list.Action'
import '../../css/index.css'
import List from './list.jsx'
import Loading from '../public/loading.jsx'
class Index extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if(this.props.initD){
            return
        }
        let {
            Init,
            InitData
        }=this.props
        InitData()
        Init()
        //changeSPCNum(shoppingCartNum)
         //console.log(this.props,'index')
    }
    change=()=>{
        let {
            changeSPCNum,
            shoppingCartNum
        }=this.props
        changeSPCNum(shoppingCartNum)
    }
    render() {
        let {
            initD,//数据
            InitData,
            addCommodity//点击加入购物车
        }=this.props
        let Action={
            addCommodity,
            InitData
        }
        //console.log(this.props,'index')
        this.change()
        return (
            <div className='wrap'>
                {
                   initD?<List getData={initD.data} Action={Action}/>:<Loading />
                }
            </div>
        )
    }
}
const mapStoreToProps=(store)=>({...store.ListRReduce})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...storAction},dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Index)