import React, { Component } from 'react'
import Header from '../header.jsx';
import {connect} from 'react-redux';
import * as  CreateReduxAction from '../../store/film/film.action.jsx';
import {bindActionCreators} from 'redux'
class OneDetail extends Component {
    componentWillMount(){
        let{
            match:{
                params
            },
            OneData
        }=this.props
        OneData(params.id)
    }
    render() {
        let{
            match:{
                params
            },
            FDData
        }=this.props
        console.log(FDData)
        return (
            <div className='film_detail'>
                <Header title={params.nm} isShow='true'/>
                <section className='section'>
                    {
                        FDData? <div className="fd_box">
                        <dl>
                            <dt>
                               <img src={FDData[0].img} alt=""/>
                            </dt>
                            <dd>
                                <h1 style={{
                                       display:'-webkit-box',
                                       wordBreak: 'break-all',
                                       webkitBoxOrient:'vertical',
                                       webkitLineClamp: '1',
                                       overflow: 'hidden'
                                }}>
                                    
                                    {
                                        FDData[0].nm
                                    }
                                </h1>
                                <h2>
                                        观众评: <span>
                                            {
                                               FDData[0].sc
                                            }
                                        </span>
                                    </h2>
                                    <h3>
                                        主演: <span>
                                            {
                                                FDData[0].star
                                            }
                                        </span>
                                    </h3>
                                    <h4>
                                        时间: <span>
                                            {
                                                FDData[0].rt
                                            }
                                        </span>
                                    </h4>
                                    <p>
                                        {
                                             FDData[0].showInfo
                                        }
                                    </p>
                            </dd>
                        </dl>
                    </div>:<p>加载中。。。</p>
                }
                </section>
            </div>
        )
    }
}
const mapStateToProps=(store)=>({...store.FilmData})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...CreateReduxAction},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(OneDetail);
