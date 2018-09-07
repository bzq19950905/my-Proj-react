import React, { Component } from 'react'
import { Input } from 'antd'
export default class From extends Component {
    pressEnter=(value)=>{
        console.log(value)
    }
    render() {
        return (
            <div className='formTop'>
                <b>
                    <i className="icon iconfont icon-gouwuche"></i> 
                </b>
                <label htmlFor="">
                     <Input onPressEnter={this.pressEnter}/>
                </label>
                <b>
                    <i className="icon iconfont icon-wode"></i> 
                </b>
            </div>
        )
    }
}
