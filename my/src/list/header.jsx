import React, { Component } from 'react';
import './css/index.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:this.props.title||'头部组件'
        }
    }
    render() { 
        let{
            title
        }=this.state;
        return ( <header className='header'>
            <a href="JavaScript:history.go(-1);"> <i className="icon iconfont icon-xiangzuo"></i></a>
            <b>
                {
                    title
                }
            </b>
            <span>

            </span>
        </header> );
    }
}
 
export default Header;