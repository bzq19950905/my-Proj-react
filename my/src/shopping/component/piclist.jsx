import React, { Component } from 'react'
import {Button} from 'antd'
export default class Piclist extends Component {
    add=()=>{
        let{
            addIndex,
            getData
        } =this.props
        let obj={}
        obj.type='+',
        obj.id=getData.id
        addIndex(obj)
    }
    minus=()=>{
        let{
            addIndex,
            getData
        } =this.props
        let obj={}
        obj.type='-',
        obj.id=getData.id
        addIndex(obj)
    }
    render() {
        let{
            getData
        }=this.props
        this.props
        return (
            <div>
                {
                    getData.num>0&&<div className='pic_list'> 
                    <h1>
                        {
                            getData.title
                        }
                    </h1>
                    <aside>
                     <Button onClick={this.minus}>-</Button><p>{getData.num}</p><Button onClick={this.add}>+</Button>
                    </aside>   </div>
                }
            </div>
        )
    }
}
