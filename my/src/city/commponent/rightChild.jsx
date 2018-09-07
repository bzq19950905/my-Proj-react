import React, { Component } from 'react'
import '../css/incdex.css';
export default class RightChild extends Component {
    changeOc=()=>{
        let {
            RightChildData,
            ActionChild,
            RId
        }=this.props
        ActionChild.AddNum(RId,RightChildData.id)

    }
    render() {
        let {
            RightChildData
        }=this.props

        return (
            <li className={RightChildData.is?'active':''} onClick={this.changeOc}>
                {
                     RightChildData.name
                }
            </li>
        )
    }
}
