import React, { Component } from 'react'
import Header from '../header'
import {
    Link
} from 'react-router-dom'
export default class One extends Component {
    render() {
        let {
            OneData
        }=this.props
        return (
            <div className='wrap'>
                <Header title='猫眼电影'/>
                <section className='section'>
                <div className="film_box">
                {
                        OneData?OneData.data.movieList.map((item,index)=>{
                            return <Link to={`/film/detail/${item.id}/${item.nm}`} key={index}>
                            <dl className='list_film'>
                                <dt>
                                    <img src={item.img} alt=""/>
                                </dt>
                                <dd>
                                    <h1>
                                        {
                                            item.nm
                                        }
                                    </h1>
                                    <h2>
                                        观众评: <span>
                                            {
                                                item.sc
                                            }
                                        </span>
                                    </h2>
                                    <h3>
                                        主演: <span>
                                            {
                                                item.star
                                            }
                                        </span>
                                    </h3>
                                    <p>
                                        {
                                            item.showInfo
                                        }
                                    </p>
                                    {
                                        item.globalReleased?<button className={item.globalReleased&&'active_button'}>购票</button>: <button>预售</button>
                                    }
                                </dd>
                            </dl>
                            </Link>
                        }):<p>加载中。。。</p>
                    }
                </div>
                </section>
            </div>
        )
    }
}
