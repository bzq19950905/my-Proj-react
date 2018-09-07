import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as storAction from '../../store/list/list.Action'
import '../../css/shopping.css'
import List from './list.jsx';
import Loading from '../public/loading.jsx'
class Index extends Component {
    componentDidMount(){
        if(this.props.initD){
            return
        }
    }

    render() {
        let {
            initD,
            shoppingData,
            shoppingPicNum,
            addSopNum,
            ShoppngKey,
            ShoppngPicAdd,
            InitData//重点 重新渲染数据
        }=this.props
        let Action={
            addSopNum,
            ShoppngKey,
            ShoppngPicAdd,
            InitData
        }
        //console.log(this.props,'购物车')
        this.props.Shoppng()
        return (
            <div className='box'>
                {
                    shoppingData.length?<List getData={shoppingData} SPicNum={shoppingPicNum} Action={Action}/>:<Loading is={true}/>
                }
            </div>
        )
    }
}
const mapStoreToProps=(store)=>({...store.ListRReduce})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...storAction},dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Index)
