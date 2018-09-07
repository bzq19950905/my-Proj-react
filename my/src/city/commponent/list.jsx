import React, { Component } from 'react'
import '../css/incdex.css'
import LeftChild from './leftChild.jsx';
import Right from './right.jsx';
export default class List extends Component {
    constructor(props){
        super(props)
        this.state={
            isActive:false,
            RData:this.props.getData[0]
        }
    }
    componentDidMount(){
        //console.log(this.props,'list')
        let {
            ActionChild
        }=this.props
        ActionChild.listData()
        ActionChild.LeftData()
    }
    change_RId=(id)=>{
        let {
            getData
        }=this.props
        this.setState({
            RData:getData[id]
        })
    }
    change_LId=(code)=>{
        //console.log(code)
        this.setState({
            isActive:code
        })
    }
    render() {
        let {
            getData,
            ActionChild
        }=this.props
        let {
            RData,
            isActive
        }=this.state
        return (
                <div className='wrap'>
                    <div className="section">
                        <div className="list_box">
                            <ul className="left">
                                {
                                       getData?getData.map((item,index)=>{
                                      
                                        return <LeftChild leftChild={item} key={index} ActionChild={ActionChild} change_RId={this.change_RId}/>
                                    }):<p>数据错误</p>
                                }
                            </ul>
                            {
                                RData? <Right RightData={RData} ActionChild={ActionChild} change_LId={this.change_LId}/>:<p>数据错误</p>
                            }
                        </div>
                    </div>
                </div>
        )
    }
}

