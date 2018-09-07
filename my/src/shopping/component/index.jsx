import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as CreateAction from '../store/store.Action.jsx';
import List from './list.jsx';
import Piclist from './piclist.jsx';
import {Badge,Button} from 'antd';
import 'antd/dist/antd.css';
class Index extends Component {
    constructor(props){
        super(props)
        this.Div=React.createRef()
        this.state={
            isMack:false,
            isPic:false
        }
    }
    componentDidMount(){
        this.props.InitHello()
        
        // console.log(this.props)
    }
    addIndex=(data)=>{
        let{
            AddRedux
        }=this.props
        AddRedux(data)
    }
    changeMack=()=>{
        if(this.Div.current.className==='active_mack'){
            this.Div.current.className='mack'
        }else{
            this.Div.current.className='active_mack'
        }
     
    }
    PicNum=()=>{
       let{
           isPic
       }=this.state
       isPic?this.setState({
           isPic:false
       }):this.setState({
        isPic:true
    })
    }
    render() {
        let{
            Init,
            count,
            picnum
        }=this.props
        let{
            isMack,
            isPic
        }=this.state
        console.log(isPic)
        return (
            <div className='maxBox'>
            <div className='wrap'>
            <section className='section'>
               <div className="box">
                 {
                    Init?Init.data.map((item,index)=>{
                        return <List getData={item} key={index} addIndex={this.addIndex}/>
                    }):<p>加载中</p>
                }   
               </div>
              
                </section> 
                <footer className='footer'> 
                   <Badge count={count} onClick={this.changeMack}>
                   购物袋 
                    </Badge>
                </footer>
                
                
            </div>
              <div className='mack' ref={this.Div}>
                    <div className="mack_list">
                        <button onClick={this.changeMack} className='mack_go'>
                            X 关闭
                        </button>
                        {
                    Init?Init.data.map((item,index)=>{
                        return <Piclist getData={item} key={index} addIndex={this.addIndex}/>
                    }):<p>加载中</p>
                }  
                    </div>
                    <div className='mack_pic'>
                        <aside>
                            <h1> <span>{count}</span> 盒商品</h1>
                            <p>合计: {
                                picnum>0&&<span>{picnum}</span>
                            }元</p>
                        </aside>
                        <Button onClick={this.PicNum}>结算</Button>
                    </div>
              </div>
              {
                 isPic&&<div className="pic">
                 <aside>
                  <button onClick={this.PicNum} className='pic_go'>
                            X
                        </button>
                        <p>
                            您总计消费: <span>{picnum}</span>
                        </p>
                        <Button onClick={this.PicNum}>确定</Button>
                 </aside>
                </div>
              }
              </div>
            
        )
    }
}
const mapStoreToProps=(store)=>({...store.StoreCK})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...CreateAction},dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Index)
