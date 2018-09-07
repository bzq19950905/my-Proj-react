import React, { Component } from 'react';
import './css/index.css';
class RightChild extends Component {

    render() { 
        let{
            RightChildData
        }=this.props;
        return ( <dl>
             <dt>
                 {
                     <img src={RightChildData.img} alt=""/>
                 }
             </dt>
             <dd>
                 {
                     RightChildData.title
                 }
             </dd>
        </dl> );
    }
}
 
export default RightChild;