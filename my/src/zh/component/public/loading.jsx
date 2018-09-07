import React, { Component } from 'react'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css'
let Style={
    width:'100%',
    height:'100%',
    background:'url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534926571066&di=9bba86a38e59c1b8e3cbf1c8289f3999&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012c0258d8bb35a801219c77694def.gif")  no-repeat center',
    backgroundSize:'cover'
}
let Lod={
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    left: '0',
    top: '0',
    background: '#FFF',
    zIndex: '99'

}
export default class Loading extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let {
            is
        }=this.props
        return (
            <div className='loading' style={Lod}>
              {
                  is&&<Link to='/list'>购物车空空的咱们去买东西去吧</Link>
              }
            
              <Spin size="large"/>
            </div>
        )
    }
}
