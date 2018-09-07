import React, { Component } from 'react'
import Header from '../public/header.jsx'
import ListChild from './listChild.jsx'
import Picfooter from './picFooter.jsx'
export default class List extends Component {
    render() {
        let{
            getData,
            Action,
            SPicNum
        }=this.props
        //console.log(getData)
        return (
            <div className='wrap'>
                <Header title='购买清单'/>
                <section className='section'>
                    <div className="auto_height">
                        {
                             getData.map((item,index)=>{
                                 return <ListChild ListChildData={item} key={index} sopInd={index} Action={Action}/>
                             })
                        }
                    </div>
                </section>
               <Picfooter Action={Action}  SPicNum={SPicNum}/>
            </div>
        )
    }
}
