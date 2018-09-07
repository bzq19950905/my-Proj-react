import React, { Component } from 'react'
import '../css/index.css';
import { Button } from 'antd';
export default class List extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow:true
        }
    }
    changeOn=()=>{
        this.setState({
            isShow:false
        })
    }
    add=()=>{
        let{
            addIndex,
            getData
        } =this.props
        let obj={}
        obj.type='+',
        obj.id=getData.id
        addIndex(obj)
    }
    minus=()=>{
        let{
            addIndex,
            getData
        } =this.props
        let obj={}
        obj.type='-',
        obj.id=getData.id
        addIndex(obj)
    }
    render() {
        let{
            getData
        }=this.props
        let {
            isShow
        }=this.state
        return (
            <dl className='list'> 
                <dt>
                    <img src={getData.img} alt=""/>
                </dt>
                <dd>
                    <h1>
                        {
                            getData.title
                        }
                    </h1>
                    <p>
                        价钱:
                        {
                            getData.pic
                        }
                    </p>
                    <div className='num'>
                    {
                        isShow?<Button onClick={this.changeOn}>
                        购买
                       </Button>:<div className='num_list'>
                        <Button onClick={this.minus}>-</Button><p>{getData.num}</p><Button onClick={this.add}>+</ Button>
                       </div>
                    }
                    </div>
                 
                </dd>
            </dl>
        )
    }
}
