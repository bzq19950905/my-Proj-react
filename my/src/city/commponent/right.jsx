import React, { Component } from 'react'
import RightChild from './rightChild.jsx';
export default class Right extends Component {
    componentDidMount(){
        let {
            change_LId,
            RightData
        }=this.props
        change_LId(RightData.code)
    }
    render() {
        let {
            RightData,
            ActionChild
        }=this.props
        let Code=RightData.code

        //console.log(RightData,'~~~~~~~~~~~~~')
        return (
            <ul className='right'>
                {
                    RightData.cities.map((item,index)=>{
                        return <RightChild  RightChildData={item} key={index} ActionChild={ActionChild} RId={Code}/>
                    })
                }
             
            </ul>
        )
    }
}
