import React, { Component } from 'react';
import './css/index.css';
import RightChild from './rightChild';
class Right extends Component {
    render() { 
        let{
            rightData
        }=this.props;
 
        return ( <div className='right'>
            {
               rightData.list.map((item,index)=>{
                    return <RightChild RightChildData={item} key={index}/>
                })
            }
        </div> );
    }
}
 
export default Right;