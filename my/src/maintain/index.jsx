import React, { Component } from 'react';
import './css/index.css';
import axios from 'axios';
//头部
import Header from './header.jsx';
//列表页
import List from './list.jsx';
//详情页
import Detail from './detail.jsx';
//请求数据的高阶函数
import GetData from './tool/getData.jsx';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getData:this.props.getData[0], 
            getDataList:this.props.getData[1],
            detailData:[],
            isShow:true
        }
    };
    //判断页面响应
    changeList=(iS)=>{
        let {
            isShow
        }=this.state;
        this.setState({
            isShow:iS
        })
    };
    //操作数据
    changeListData=(data)=>{
        let {
            detailData
        }=this.state;
        this.setState({
            detailData:data
        })
    }
    //detail反回的数据
    // detailChange=(data)=>{
    //     let {
    //         getData
    //     }=this.state;
    //     console.log(data)
    //     // this.setState({
    //     //     getData:data
    //     // })
    // }
    // componentDidMount(){
    //     let {
    //         getData,
    //         listData
    //     }=this.state;
    //     let Data=getData;
    //     this.setState({
    //         listData:Data
    //     })
    // };
    render() { 
        let {
            isShow,
            getData,
            detailData,
            getDataList
        }=this.state;
        return ( 
            <div className='wrap'>
                <Header title='维修记录'/>
                <section className='section'>
                   {
                       isShow?<List changeList={this.changeList} 
                        listData={getData} getDataList={getDataList} changeListData={this.changeListData}
                       />:<Detail changeList={this.changeList} detailData={detailData} />
                   }
                </section>
            </div>
        );
    }
}
 
export default GetData(Index,[{url:'maintain.json',type:'get'},{url:'maintainList.json',type:'get'}]);