import Mock from 'mockjs'
import ListData from './data/list.js';

Mock.mock('/api/list',()=>{
    return {
        code:'0',
        data:ListData
    }
})