import React, { Component } from 'react'
import Header from './header.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as DetailAction from '../../store/detail/detail.Action'
import '../../css/detail.css'
import Loading from './loading.jsx'
class Detail extends Component {
    componentDidMount(){
        let{
            match:{
                params
            },
            InitHello,
            InitData
        }=this.props
        InitHello()
        InitData(params.id)
    }
    render() {
        let{
            D_initD
        }=this.props
        console.log(this.props)
        return (
            <div className='Detail_list'>
            {
                D_initD.shop_name? <div className="wrap">
                      <Header title={D_initD.shop_name} isHistory={true}/>
                       <section className='section'>
                           <div className="auto_height">
                                <img src={D_initD.img} alt="" width='80%' height='80%'/>
                           </div>
                       </section>
                </div>:<Loading />
            }
              
            </div>
        )
    }
}
const mapStoreToProps=(store)=>({...store.DetailReduce})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...DetailAction},dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Detail)