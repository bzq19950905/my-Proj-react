import axios from 'axios';
import '../mock/index.jsx';
export const Hello=(text)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:'HELLO',
            data:'2018/8-21'
        })
    }
}
export const InitData=()=>{
     return(dispatch,getState)=>{
        axios.get('/api/index').then(res=>{
            if(res.data.code==='0'){
                dispatch({
                    type:'INIT_DATA',
                    data:res.data.data
                })
            }
        })
     }
}
export const listData=()=>{
    return(dispatch,getState)=>{
        let ObjAll= [...getState().storeReduce.IData]
    
        ObjAll.map((item,index)=>{
            item.id=index
            item.num='0'
            item.isActive=false
            item.cities.map((item_1,index_1)=>{
                item_1.is=false,
                item_1.id=index_1
            })
        })
        dispatch({
            type:'INIT_DATA',
            data:ObjAll
        })
    }
}
export const LeftData=(LeftID)=>{
    return(dispatch,getState)=>{
      
        let LID=LeftID?LeftID:'0'
        let ObjAll= [...getState().storeReduce.IData]
        //console.log(ObjAll[LID])
        ObjAll.map((item,index)=>{
            item.isActive=false
        })
        ObjAll[LID].isActive=!ObjAll[LID].isActive
        dispatch({
            type:'INIT_DATA',
            data:ObjAll
        })

    }
}
export const AddNum=(Code,Id)=>{
    return(dispatch,getState)=>{
       let ObjAll= [...getState().storeReduce.IData]

       let Obj=ObjAll.filter(item=>{
           return item.code==Code
       })
       Obj[0].cities[Id].is=!Obj[0].cities[Id].is
       let num=0
       Obj[0].cities.map((item,index)=>{
          if(item.is===true){
              num++
          }
       })
       Obj[0].num=num
       dispatch({
        type:'INIT_DATA',
        data:ObjAll
    })
    }
}
