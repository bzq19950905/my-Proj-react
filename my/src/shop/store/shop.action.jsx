import axios from 'axios';
import '../mock/index.jsx';
import store from './index.jsx'
export const openDor=(text)=>{
    return (dispatch)=>{
        dispatch({
            type:'APPLE',
            data:'1111'
        })
    }
}
export const IndexData=()=>{
    return (dispatch)=>{
        axios.get('/index/data').then(res=>{
            dispatch({
                type:'INDEX_DATA',
                data:res.data.data
            })
        })
    }
}
//请求的数据每次刷新就没了
// export const DetailData=(text)=>{
//     return (dispatch,getState)=>{
//         console.log(store.getState().SaveFruit)
//         //let Data=store.getState().SaveFruit.IData[text]
//         dispatch({
//             type:'DETAIL_DATA',
//             data:null
//         })
//     }
// }
export const DetailData=(text)=>{
    return (dispatch)=>{
        axios.get('/index/data').then(res=>{
            dispatch({
                type:'DETAIL_DATA',
                data:res.data.data[text]
            })
        })

    }
}