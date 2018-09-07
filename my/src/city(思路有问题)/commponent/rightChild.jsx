import React, { Component } from 'react'
import '../css/incdex.css';
export default class RightChild extends Component {
    changeOc=()=>{
        let {
            RightChildData,
            AddNum
        }=this.props
        AddNum(RightChildData)

    }
    render() {
        let {
            RightChildData
        }=this.props
        console.log(RightChildData)
        return (
            <li className={RightChildData.is?'active':''} onClick={this.changeOc}>
                {
                     RightChildData.name
                }
            </li>
        )
    }
}
