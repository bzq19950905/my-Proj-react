import React, { Component } from 'react'
import '../css/incdex.css'
export default class LeftChild extends Component {
    constructor(props){
        super(props)
    }
    changeId=()=>{
        let {
            leftChild,
            change_RId,
            ActionChild
        }=this.props
        change_RId(leftChild.id)
        ActionChild.LeftData(leftChild.id)
    }
    render() {
        let {
            leftChild
        }=this.props
        //console.log(leftChild)
        return (
            <li data-id={leftChild.code} onClick={this.changeId} className={leftChild.isActive?'active_title':''}>
                 {
                     leftChild.name
                 }
                 {
                     leftChild.num>0&&<span>{leftChild.num}</span>
                 }
            </li>
        )
    }
}

