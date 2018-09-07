import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Screen extends Component {
    onChange=()=>{
        window.location.reload()
    }
    render() {
        return (
            <div className='box'>
                <Link to='/film' onClick={this.onChange}>点击去电影网</Link>
            </div>
        )
    }
}
