import React, { Component } from 'react';
import axios from 'axios';
import './css/index.css';
//头部组件
import Header from './header';
//左侧
import Left from './left';
//右侧
import Right from './right';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            getData:[],
            leftData:[],
            rightData:[],
            deflautKey:''
        }
    }
    componentDidMount(){
        axios.get('data.json').then(date=>{
            let Data=date.data
            this.setState({
                getData:date.data,
                leftData:Object.keys(date.data),
                rightData:Data[Object.keys(Data)[0]],
                deflautKey:Object.keys(Data)[0]
            },()=>{
            
            })
        })
 
    }
    changeLeft=(v)=>{
        let {
            getData
        }=this.state;
        this.setState({
            rightData:getData[v],
            deflautKey:v
        })
    }
    render() { 
        let{leftData,rightData,deflautKey}=this.state;
        console.log(leftData,rightData,deflautKey)
        return ( <div className='wrap'>
            <Header title='车辆筛选'/>
            <section className='section'>
                 <Left  leftData={leftData} changeLeft={this.changeLeft} deflautKey={deflautKey}/>
                 {
                     rightData.list?<Right rightData={rightData}/>:null
                 }
            </section>
        </div> );
    }
}
 
export default Index;