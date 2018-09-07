import React, { Component } from 'react'
import Header from '../public/header.jsx'
//轮播图
import Swiper from '../public/swiper.jsx'
//购物列表页
import DispatchList from './dispatchList.jsx'
export default class List extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let {
            Action
        }=this.props
        Action.InitData()
    }
    render() {
         let{
             getData,
             Action
         }=this.props
         //console.log(getData)
        return (
            <div className='wrap'>
                <Header is={true}/>
                <section className='section'>
                    {
                        getData?<div className="box">
                        <Swiper SwData={getData.SwiperImg} Height={'2rem'}/>
                        <DispatchList DispatchListData={getData.item} Action={Action}/>
                    </div>: <p>加载中。。。</p>
                    }
                </section>

            </div>
        )
    }
}
