import React, { Component } from 'react';
class TableButton extends Component {
    constructor(props){
        super(props)
        this.name=React.createRef();
        this.sex=React.createRef();
        this.age=React.createRef();
        this.state={
            isShow:false
        }
    }
    clickChangeData=()=>{
        let{
            getNewData,
            index
        }=this.props;
        let obj={};
        obj.name=this.name.current.value;
        obj.sex=this.sex.current.value;
        obj.age=this.age.current.value;
        getNewData(obj,index)
        this.setState({
            isShow:false
        })
    }
    render() {
        let {
            btns,
            add,
            defaultData
        } =this.props;
        let{
            isShow
        }=this.state;
        return ( 
            <div>
                {
                    btns.length>0&&btns.map((item,index)=>{
                        return <button onClick={()=>{
                            index===2&&this.setState({
                                isShow:true
                            })
                            item.func(add);
                        }
                        }  key={index}>{item.content} </button> 
                    })
                
                }
                {
                    isShow&&<div>
                        <input type="text" defaultValue={defaultData.name} ref={this.name}/>
                        <input type="text" defaultValue={defaultData.sex} ref={this.sex}/>
                        <input type="text" defaultValue={defaultData.age} ref={this.age}/>
                        <button onClick={this.clickChangeData}>确认</button>
                    </div>
                }
            </div>
        );
    }
}

export default TableButton; 