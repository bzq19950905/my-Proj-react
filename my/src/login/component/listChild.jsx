import React, { Component } from 'react'
import {
    Link
}from 'react-router-dom'
export default class ListChild extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let{
            ListData
        }=this.props
        console.log(ListData)
        // <Link to={{path:'/list/detail',
        // query:{data:ListData}}}>
        return (
               <Link to={{pathname:`/list/detail/?nameid=${ListData.nameId}&id=${ListData.id}`}}>
                <dl>
                <dt>
                   <img src={ListData.img} alt=""/>
                </dt>
                <dd>
                    <h1>{ListData.title}</h1>
                </dd> 
                </dl>
            </Link>
        )
    }
}
