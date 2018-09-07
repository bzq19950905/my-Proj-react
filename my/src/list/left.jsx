import React, { Component } from 'react';
import './css/index.css';
class Left extends Component {
    constructor(props) {
        super(props);
    }
    changeValue=(e)=>{
        let{
            changeLeft
        }=this.props;
        changeLeft(e.target.innerHTML)

    }
    render() {
        let{leftData,deflautKey}=this.props;
    
        return ( <ul className='left'>
        {
            leftData.length>0&&leftData.map((item,index)=>{
                return <li key={index} onClick={this.changeValue} className={deflautKey===item?'action':null}>{item}</li>
            })
        }
        </ul> );
    }
}
 
export default Left;