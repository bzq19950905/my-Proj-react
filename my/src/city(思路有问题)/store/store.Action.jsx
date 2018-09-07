import axios from 'axios';
import '../mock/index.jsx';
export const Hello=(text)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:'HELLO',
            data:'七夕快乐~~'
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

export const CloneData=(index)=>{
    return(dispatch,getState)=>{
        let Obj= getState().storeReduce.IData
        let Rid=index?index:0
        let ObjR=[...Obj]
        ObjR.map((item,index)=>{
            item.cities.map((item_1,index_1)=>{
                item_1.is=false,
                item_1.id=index_1
            })
        })
        console.log(ObjR)

        dispatch({
            type:'ACTIVE',
            data:Rid
        })
        dispatch({
            type:'RIGHT_DATA',
            data:ObjR[Rid]
        })
    }
}
export const LeftCloneData=()=>{
    return(dispatch,getState)=>{
        let ObjAll= getState().storeReduce.IData  
        let ObjL=[...ObjAll]
        let arr=[]
        ObjL.map((item,index)=>{
            let obj={}
            obj.name=item.name
            obj.code=item.code
            obj.id=index
            obj.num='0'
            arr[index]=obj          
        })
        dispatch({
            type:'LEFT_DATA',
            data:arr
        })
      
    }
}
export const AddNum=(obj)=>{
    return(dispatch,getState)=>{
        let LData=getState().storeReduce.LData
        let RData=getState().storeReduce.RData
        //console.log(!RData.cities[obj.id].is)
        RData.cities[obj.id].is= !RData.cities[obj.id].is
        dispatch({
            type:'RIGHT_DATA',
            data:RData
        })
    }
}