import React, { Component } from 'react'
let Swiper=window.Swiper
export default class SwiperList extends Component {
    constructor(props){
        super(props)
        this.swiper=React.createRef()
        this.state={
            Height:this.props.Height?this.props.Height:'100%'
        }
    }
    componentDidMount(){
        this.Swiper = new Swiper(this.refs.lun, {
            autoplay:true,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    }
    render() {
        let {
            SwData
        } =this.props
        let {
            Height
        }=this.state
        return (
            <div className='swiper-container' ref='lun' style={{height:Height}}>
                <div className="swiper-wrapper">
                    {
                        SwData.map((item,index)=>{
                            return <div className="swiper-slide" key={index}>
                                    <img src={item.img} alt=""/>
                                </div>
                        })
                    }
                </div>
                <div className='swiper-pagination'></div>
            </div>
        )
    }
}
