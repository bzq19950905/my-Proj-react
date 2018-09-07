import React, { Component } from 'react'
import {
    Link,
    Prompt
}from 'react-router-dom'
export default class List extends Component {
    render() {
        return (
            <div>
                <Link to='/list/detail'>点击跳转详情页</Link>
                <Prompt when={true} message='真的确定好了吗~~' />
            </div>
        )
    }
}
