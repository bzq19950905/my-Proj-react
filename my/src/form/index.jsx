import React, { Component } from 'react';
import TableButton from './TableButton.jsx';
import TableData from './TableData.jsx';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //修改的数据
            defaultData:{},
            //数据
            data:[{
                name:'张三',
                age:'14',
                sex:'男'
            },{
                name:'李四',
                age:'14',
                sex:'女'
            },{
                name:'小明',
                age:'20',
                sex:'男'
            }],
            //按钮方法的传递
            btns:[{
                content:'添加',
                func:(index)=>{
          
                    this.addFn(index)
                }
            },{
                content:'删除',
                func:(index)=>{
          
                    this.removeFn(index)
                }
            },{
                content:'修改',
                func:(index)=>{
                    console.log(index)
                    this.changeData(index)
                }
            }]
        }
        
    };
    //修改
    changeData=(index)=>{
        let{
            data
        }=this.state;
        this.setState({
            defaultData:data[index]
        },()=>{
            console.log(this.state.defaultData)
        })
    }
    //添加
    addFn=(index)=>{
   
        let{data}=this.state
        data.push(data[index]);
        this.setState({
            data
        })
    }
    //删除
    removeFn=(index)=>{
   
        let{data}=this.state
        data.splice(index,1)
        this.setState({
            data
        })
        
    }
    //获取修改的数据替换
    getNewData=(newData,index)=>{
        let{data}=this.state
        data.splice(index,1,newData)
        this.setState({
            data
        })
        
    }
    render() { 
        let{
            btns,
            data,
            defaultData
        }=this.state;
        return ( 
            <div>
                <TableData  btns={btns} data={data} defaultData={defaultData} getNewData={this.getNewData}/>
                {/* <TableButton btns={btns}/> */}
            </div>
        );
    }
}
 
export default Index;