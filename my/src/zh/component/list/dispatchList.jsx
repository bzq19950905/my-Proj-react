import React, { Component } from 'react'
import DLchild from './DL.child.jsx'
export default class DispatchList extends Component {
    componentDidMount(){
        //console.log(this.props)
    }
    render() {
        let {
            DispatchListData,
            Action
        }=this.props
        return (
            <div className='auto_height'> 
                {
                    DispatchListData.map((item,index)=>{
                        return <DLchild DLchildData={item} key={index} Action={Action}/>
                    })
                }
            </div>
        )
    }
}
