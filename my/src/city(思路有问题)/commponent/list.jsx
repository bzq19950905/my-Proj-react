import React, { Component } from 'react'
import '../css/incdex.css'
import {BrowserRouter as Router,Route,Redirect,Switch,withRouter} from 'react-router-dom'
import LeftChild from './leftChild.jsx';
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
import * as storeAction from '../store/store.Action'
import Right from './right.jsx';
class List extends Component {
    componentDidMount(){
        console.log(this.props,'list')
        let {
            CloneData,
            LeftCloneData,
        }=this.props;

        CloneData()
        LeftCloneData()
    }
    changeList_Id=(obj)=>{
        let {
            CloneData,
        }=this.props;
        
        CloneData(obj.id)
    }
    // changeRnum=(num)=>{
    //     console.log(num)
    //     let {
    //         AddNum
    //     }=this.props
    //     //AddNum(11)
    // }
    render() {
        let {
            getData,
            RData,
            LData,
            AddNum
        }=this.props
        //console.log(LData,RData,'list11')
        return (
                <div className='wrap'>
                    <div className="section">
                        <div className="list_box">
                            <ul className="left">
                                {
                                     LData?LData.map((item,index)=>{
                                      
                                        return <LeftChild leftChild={item} key={index} changeList_Id={this.changeList_Id} isActive={index}/>
                                    }):<p>数据错误</p>
                                }
                            </ul>
                            {
                                RData? <Right RightData={RData}   AddNum={AddNum}/>:<p>数据错误</p>
                            }
                        </div>
                    </div>
                </div>
        )
    }
}
const mapStoreToProps=(store)=>({...store.storeReduce})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...storeAction},dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(List)
