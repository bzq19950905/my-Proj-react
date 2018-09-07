import React, { Component } from 'react'
import axios from 'axios';
import Header from './header.jsx';
import '../css/index.css';
export default class Detail extends Component {
    constructor(props){
        super(props)
        
        let {
            location: {
                pathname,
                search
            }
        } = this.props;
        console.log(pathname,search,'1111111')
        this.state={
            getData:null
        }
    }
    // params=()=>{
    //     let {
    //         params
    //     }=this.state;
    //     let url = props.location.search;
    //     let params = {};
    //     if (url.indexOf("?") != -1) {
    //         url = url.substr(1);
    //         var arr = url.split("&");
    //         arr.forEach(function(item, index) {
    //             var objArr = item.split("=");
    //             params[objArr[0]] = objArr[1]
    //         })
    //     }
    // }
    componentDidMount(){
        let {
            Data
        }=this.state
        let {
            location: {
                pathname,
                search
            }
        } = this.props;
        console.log(pathname,search)
        let url = (pathname.indexOf('?') > -1 && pathname) || (search.indexOf('?') > -1 && search);
        console.log(this.props)
        let params = {};
        if (url.indexOf("?") != -1) {
            url = url.split('?')[1];
            console.log(url, 'sdsd')
            var arr = url.split("&");
            arr.forEach(function(item, index) {
                var objArr = item.split("=");
                params[objArr[0]] = objArr[1]
            })
        }
        console.log(params, 'detail')
       
        axios.get('/detail',{
            data:{
                ...params
            }
        }).then(res=>{
            if(res.data.code==='0'){
                this.setState({
                    getData:res.data.data
                })
            }
        })
    }
    render() {
        let {
            getData
        }=this.state;
        return (
            <div className='wrap'>
                <Header title='详情页'/>
                <section className='section'>
                    <div className="detail">
                        {
                            getData?<div>
                                <img src={getData.img} alt=""/>
                            </div>:null
                        }
                    </div>
                </section>
            </div>
        )
    }
}
