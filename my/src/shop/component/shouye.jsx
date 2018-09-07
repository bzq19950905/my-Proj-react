import React, { Component } from 'react'
import {withRouter,Link} from 'react-router-dom'
class Shouye extends Component {
    render() {
        let{
            ShouyeData
        }=this.props
     
        return (
            
            <div className='box'>
                {
                    ShouyeData?ShouyeData.map((item,index)=>{
                      
                        return <Link to={'/home/detail/'+item.id} key={index}>
                        <div className='exhibition'>
                            <h1>
                                {item.title}
                            </h1>
                            <img src={item.img} alt=""/>
                        </div>
                        </Link>
                    }):null
                }
            </div>
        )
    }
}
export default withRouter(Shouye)
