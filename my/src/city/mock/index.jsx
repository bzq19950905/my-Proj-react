import Mock from 'mockjs'

import ListData from './data/city.json'
Mock.mock('/api/index',()=>{
    return {
        code:'0',
        data:ListData
    }
})