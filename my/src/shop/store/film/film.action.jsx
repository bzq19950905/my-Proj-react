import axios from 'axios'
import '../../mock/index.jsx';
import store from '../index.jsx';
export const FilmData=()=>{
    return(dispatch)=>{
        axios.get('/film/data').then(res=>{
            dispatch({
                type:'FILM_DATA',
                data:res.data
            })
        })
    }
} 
export const OneData=(text)=>{
    return (dispatch)=>{
        axios.get('/film/detail/data',{
            data:text
        }).then(res=>{
            dispatch({
                type:'DETAIL_DATA',
                data:res.data.data
            })
        })
    
    }
    
}
// export const IndexData=()=>{
//     return (dispatch)=>{
//         axios.get('/index/data').then(res=>{
//             dispatch({
//                 type:'INDEX_DATA',
//                 data:res.data.data
//             })
//         })
//     }
// }