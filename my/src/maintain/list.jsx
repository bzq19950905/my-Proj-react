import React, { Component } from 'react';
import './css/index.css';
//渲染下面的
import ListChild from './listChild';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            getData:this.props.listData
        }
    };
    changeIs=()=>{
        let {
            changeList,
            changeListData
        }=this.props;
        changeList(false)
        changeListData(this.state.getData)
    };
    render() { 
        let{
            listData,
            getDataList
        }=this.props;
        console.log(getDataList)
        let res=Object.keys(listData[0]);
        return ( <div className='list'>
            <div className='list_box'>
            <ul>
                {
                 res.map((item,index)=>{
                     return <li key={index}> <b>{item+':'}</b> <span>{listData[0][item]}</span> </li>
                 })
                }
            </ul>
            <button onClick={this.changeIs}>
                我要反馈
            </button>
            </div>
            <div className='list_list'>
                {
                    getDataList.length>0&&getDataList.map((item,index)=>{
                        return <ListChild ListChildData={item} key={index}/>
                    })
                }
            </div>
        </div> );
    }
}
 
export default List;