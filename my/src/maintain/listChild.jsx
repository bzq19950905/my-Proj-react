import React, { Component } from 'react';
import './css/index.css';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    };
    changeIs=()=>{
        let {
            changeList
        }=this.props;
        changeList(false)
    };
    render() { 
        let{
            ListChildData
        }=this.props;
        console.log(ListChildData)
        return ( <dl>
        
        </dl> );
    }
}
 
export default List;