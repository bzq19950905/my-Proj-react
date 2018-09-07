import React, { Component } from 'react'

export default class DLchild extends Component {
    constructor(props){
        super(props)
        this.isBack=React.createRef()
        
    }
    changeOn_Commodity=()=>{
        let {
            Action,
            DLchildData
        }=this.props
        if(DLchildData.isShopping!=true){
            Action.addCommodity(DLchildData.listId)
            //this.isBack.current.style.background='#000'
        }else{
            alert('商品已加入购物车')
        }
       
    }
    render() {
        let {
            DLchildData
        }=this.props

        //console.log(DLchildData.isShopping)
        return (
            <dl className='list_child'>
               <dt>
                   <img src={DLchildData.img} alt=""/>
                </dt>
                <dd>
                    <h1 style={{
                           display: '-webkit-box',
                           wordBreak: 'break-all',
                           webkitBoxOrient:'vertical',
                           webkitLineClamp: '1',
                           overflow:'hidden'
                    }}>
                        {
                            DLchildData.title
                        }
                    </h1>
                   <ul>
                       <li>该款月销{DLchildData.sold}笔</li>
                       <li>{DLchildData.shop_name}</li>
                   </ul>
                   <aside>
                       <span>
                           ￥<em>
                               {
                                  DLchildData.price 
                               }
                           </em>
                       </span>
                       {
                           DLchildData.shipping!=-1?<b>不包邮</b>:<b>免运费</b>

                       }
                   </aside>
                   <div className='_purchase' onClick={this.changeOn_Commodity} ref={this.isBack} style={{background:DLchildData.isShopping?'#000':'#F45752'}}>
                        <i className="icon iconfont icon-gouwuche"></i> 
                   </div>
                </dd> 
            </dl>
        )
    }
}
