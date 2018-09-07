import React, { Component } from 'react';
import './css/index.css';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.input=React.createRef();
        this.state = { 
            isShow:false,
            getData:this.props.detailData[0],
            defaultData:null
        }
    };
    //传递给父组件
    changeIs=()=>{
        let {
            changeList
        }=this.props;
        changeList(true)
    };
    //每一项的修改
    changeXg=(v)=>{
        let {
     
            getData
    
        }=this.state;
        this.setState({
            isShow:true,
            defaultData:{
                data:getData[v],
                Id:v
            }
        })
    }
    //确认修改
    changeQr=(v)=>{
        // let {detailChange}=this.props;
        console.log(v)
        let {
     
            getData
    
        }=this.state;
        let Value=this.input.current.value;

 
        let Obj=getData
        Obj[v]=Value;
        // console.log(Obj[getData[v]])
        console.log(Obj)
        this.setState({
            getData:Obj
        })
        // detailChange(this.state.getData)
        
    }
    render() { 
        let {
            isShow,
            defaultData,
            getData
        }=this.state
        let res=Object.keys(getData);
        console.log(defaultData)
        return ( <div className='detail'>
            <button onClick={this.changeIs}>
                返回
            </button>
        
            <ul className='detail_ul'>
                {
                 res.map((item,index)=>{
                     return <li key={index}> <b>{item+':'}</b> <span>{getData[item]}</span> <button onClick={()=>this.changeXg(item)}>修改</button> </li>
                    
                    })
                }
            </ul>
         
                {
                    isShow&& <div> <input type="text" placeholder={defaultData.data} ref={this.input}/> <button onClick={()=>this.changeQr(defaultData.Id)}>确认</button> </div>
                }
       
                   
              
            
        </div> );
    
    }
}
 
export default Detail;