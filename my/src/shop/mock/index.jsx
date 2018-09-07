import Mock from 'mockjs';
import axios from 'axios';
import FilmData from './data/filmData';
import Item from 'antd/lib/list/Item';
let listDatas=[{
        nameId:'zhangsan',
        id:'0',
        title:'路飞',
        img:'https://f12.baidu.com/it/u=62466529,3197984907&fm=72',
        time:'2016-1-2'
    },{
        nameId:'zhangsan',
        id:'1',
        title:'草帽海贼团',
        img:'https://f11.baidu.com/it/u=1702154046,3138678857&fm=72',
        time:'2016-10-2'
    },{
        nameId:'zhangsan',
        id:'2',
        title:'帽子的誓言',
        img:'https://f10.baidu.com/it/u=1726574660,189006746&fm=72',
        time:'2016-10-2'
    }]
Mock.mock('/index/data',()=>{
    return {
        code:'0',
        data:listDatas
    }
})
Mock.mock('/film/data',()=>{
    return {
        code:'0',
        data:FilmData
    }
 
})
Mock.mock('/film/detail/data',(index)=>{
    let id=index.body
    let Data=FilmData.movieList.filter((item)=>{
        return item.id==id
    })
    if(Data){
        return {
            code:'0',
            data:Data
        }
    }else{
        return{
            code:'0',
            data:'信息错误,请稍后再试'
        }
    }
})
