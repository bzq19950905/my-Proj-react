import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Button,Checkbox} from 'antd'
import 'antd/dist/antd.css'
class ListChild extends Component {
    constructor(props){
        super(props)
        this.changeEd=React.createRef()
    }
    componentDidMount(){
        let{
            ListChildData
        }=this.props
        this.changeEd.current.checked=ListChildData.ispic
        
    }
    changeAddZ=()=>{
        let {
            Action,
            sopInd,
            InitData
        }=this.props
        let obj={
            type:'+',
            id:sopInd
        }
        Action.addSopNum(obj)
        Action.InitData()
        Action.ShoppngPicAdd()
    }
    changeAddF=()=>{
        let {
            Action,
            sopInd,
            InitData
        }=this.props
        let obj={
            type:'-',
            id:sopInd
        }
        Action.addSopNum(obj)
        Action.InitData()
        Action.ShoppngPicAdd()
    }
    changeBox=(e)=>{
        let {
            Action,
            sopInd
        }=this.props
        let obj={
            type:e.target.checked,
            id:sopInd
        }
        Action.ShoppngKey(obj)
        Action.ShoppngPicAdd()
        // console.log(ListChildData.listId)
        // console.log(e.target.checked)
    }
    //跳详情页
    ToDetail=()=>{
        let{
            history,
            ListChildData
        }=this.props
        history.push('/detail/'+ListChildData.listId)
    }
    render() {
        let {
            ListChildData
        }=this.props
        //console.log(ListChildData,'list')
        //<input type="checkbox" name="" id="" onChange={this.changeBox} ref={this.changeEd}/>
        return (
            <div className='shop_list_child'>
                <div className="shop_left">
                   
                    <Checkbox onChange={this.changeBox} ref={this.changeEd}></Checkbox>
                </div>
                <dl className="shop_center" onClick={this.ToDetail}>
                    <dt>
                        <img src={ListChildData.img} alt=""/>
                    </dt>
                    <dd>
                    <h1>
                        {
                            ListChildData.title
                        }
                    </h1>
                    <aside>
                       <span>
                           ￥<em>
                               {
                                  ListChildData.price 
                               }
                           </em>
                       </span>
                       {
                           ListChildData.shipping!=-1?<b>不包邮</b>:<b>免运费</b>

                       }
                   </aside>
                    </dd>
                </dl>
                <div className="shop_right">
                       <Button onClick={this.changeAddF}>
                           -
                       </Button>
                       <p>{ListChildData.sopNum}</p>
                       <Button onClick={this.changeAddZ}>
                           +
                       </Button>
                </div>
            </div>
        )
    }
}
export default withRouter(ListChild)
