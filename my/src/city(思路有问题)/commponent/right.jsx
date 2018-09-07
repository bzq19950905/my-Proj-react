import React, { Component } from 'react'
import RightChild from './rightChild.jsx';
export default class Right extends Component {
    componentDidMount(){
        console.log(this.props,'right')
    }
    render() {
        let {
            RightData,
            AddNum
        }=this.props
        //console.log(RightData.cities,'~~~~~~~~~~~~~')
        return (
            <ul className='right'>
                {
                    RightData.cities.map((item,index)=>{
                        return <RightChild  RightChildData={item} key={index}  AddNum={AddNum}/>
                    })
                }
             
            </ul>
        )
    }
}
