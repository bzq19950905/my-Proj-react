import React, { Component } from 'react'
import '../css/index.css';
import axios from 'axios';
import '../mock/index.jsx';
import {
    Link
}from 'react-router-dom'
//头部
import Header from './header.jsx';
//渲染
import ListChild from './listChild.jsx';
export default class List extends Component {
    constructor(props){
        super(props)
    
        let str=props.location.search;
        let index=str.indexOf('=')
    
        this.state={
            getData:null,
            Id:str.slice(index+1)
        }
    }
    //获取数据
    componentDidMount(){
        let {
            getData,
            Id
        }=this.state
        axios.get('/list',{
            data:{
                name:Id
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
        console.log(getData)
        return (
            <div className='wrap'>
                <Header title='列表页'/>
                <section className='section'>
                    <div className="list">
                        {
                            getData?getData.map((item,index)=>{
                                return <ListChild ListData={item} key={index} />
                            }):null
                        }
                    </div>
                </section>
            </div>
        )
    }
}
