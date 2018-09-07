import React, { Component } from 'react'
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            is:this.props.is?this.props.is:false,
            title:this.props.title?this.props.title:'头部标签',
            isHistory:this.props.isHistory?this.props.isHistory:false
        }
    }
    render() {
        let{
            is,
            title,
            isHistory
        }=this.state
        return (
         <div className='header'>
            {
                is?<div className='header_isT'>
                 <span>
                 <i className="icon iconfont icon-taobao"></i> 
                 </span>
                    <aside>
                       
                        <i className="icon iconfont icon-fangdajing"></i> 
                        <b>点击搜索</b>
                    </aside>
                </div>:<div className='header_isF'>
                {
                    isHistory?<a href="JavaScript:history.go(-1)"><i className="icon iconfont icon-xiangzuo"></i> </a>: <span>
                    <i className="icon iconfont icon-taobao"></i> 
                    </span>
                }
               
            
           
                        <b>
                            {
                                title
                            }
                        </b>
                    <a href="#">
                        <i className="icon iconfont icon-yonghu"></i> 
                    </a>
                </div>
            }
         </div>
        )
    }
}
