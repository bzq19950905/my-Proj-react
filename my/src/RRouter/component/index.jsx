import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <Link to='/list'>跳到List组件</Link>
            </div>
        );
    }
}
 
export default Index;