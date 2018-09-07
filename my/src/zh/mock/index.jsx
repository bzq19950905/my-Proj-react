import Mock from 'mockjs'
//import listData from './data/data.json'
import swiperData from './data/swiperData.json'
import listData from './data/list.json'
let initObj={}
initObj.item =listData.item
initObj.SwiperImg=swiperData
initObj.item.map((item,index)=>{
    item.listId=index,
    item.isShopping=false
})
//console.log(initObj)
Mock.mock('/api/data',()=>{
    return{
        code:'0',
        data:initObj
    }
})
Mock.mock('/api/detail',(params)=>{
    return{
        code:'0',
        data:initObj.item[params.body]
    }
})