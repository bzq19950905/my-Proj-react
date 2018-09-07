import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            title:this.props.title||'头部组件',
            isShow:this.props.isShow?this.props.isShow:false
        }
    }
    render() {
        let{
            title,
            isShow
        }=this.state
        return (
            <div className='header'>
                <a href="JavaScript:history.go(-1)"> {
                    isShow&&<i className="icon iconfont icon-xiangzuo"></i> 
                } </a>
                <b>
                    {
                        title
                    }
                </b>
                <a href="#"><i className="icon iconfont icon-gengduo-2"></i></a>
            </div>
        )
    }
}
