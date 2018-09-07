import axios from 'axios'
import '../../mock/index.jsx'
export const InitHello=()=>{
    return(dispatch,getState)=>{
        dispatch({
            type:'HELLO',
            data:"2018/8-22"
        })
    }
}
export const InitData=(id)=>{
    return(dispatch,getState)=>{
        axios.get('/api/detail',{
            data:id
        }).then(res=>{
            if(res.data.code==='0'){
                dispatch({
                    type:'INIT_DATA',
                    data:res.data.data
                })
            }else{
                console.log('数据错误')
            }
           
        })
    }
}