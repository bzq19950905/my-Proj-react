import axios from 'axios'
import '../../mock/index.jsx';
export const Init =(text)=>{
    return(dispatch,getState)=>{
        dispatch({
            type:'HELLO',
            data:'2018-8-19'
        })
    }
}
export const InitData=()=>{
    return(dispatch,getState)=>{
        axios('/api/data').then(res=>{
            dispatch({
                type:'INIT_DATA',
                data:res.data
            })
        })
    }
}
export const addCommodity=(addId)=>{
    return(dispatch,getState)=>{
        //console.log(addId)
        let ScNum =getState().ListRReduce.shoppingCartNum
        let Obj=getState().ListRReduce.initD
        let ShopData=getState().ListRReduce.shoppingData
        //console.log(Obj.data.item[addId].isShopping)
        if(Obj.data.item[addId].isShopping!=true){
            ScNum++
        }
        Obj.data.item[addId].isShopping=true
        //console.log(ShopData)
        let ObjSop=Obj.data.item[addId]
        ObjSop.sopNum=0
        ObjSop.ispic=false
        ShopData.push(ObjSop)
        dispatch({
            type:'SHOPPING_NUM',
            data:ScNum
        })
        dispatch({
            type:'INIT_DATA',
            data:Obj
        })
        dispatch({
            type:'SHOPPING_DATA',
            data:ShopData
        })
    }
}
export const addSopNum=(action)=>{
    
    return(dispatch,getState)=>{
        //console.log(action)
        let Obj = getState().ListRReduce.shoppingData
        if(action.type==='+'){
           
            Obj[action.id].sopNum++
        }else{
            if(Obj[action.id].sopNum>0){
                Obj[action.id].sopNum--
            }
        }
        //console.log(Obj)
        dispatch({
            type:'SHOPPING_DATA',
            data:Obj
        })
    }
}
export const Shoppng=()=>{
    return(dispatch,getState)=>{
        let Obj = getState().ListRReduce.shoppingData
        dispatch({
            type:'SHOPPING_DATA',
            data:Obj
        })
    }

}
export const ShoppngKey=(action)=>{
    return(dispatch,getState)=>{
        //console.log(action)
        let Obj = getState().ListRReduce.shoppingData
        Obj[action.id].ispic=action.type
        dispatch({
            type:'SHOPPING_DATA',
            data:Obj
        })
    }

}
export const ShoppngPicAdd=()=>{
    return(dispatch,getState)=>{
        let Obj = getState().ListRReduce.shoppingData
        let AddNum= getState().ListRReduce.shoppingPicNum
        //console.log('+++++++',AddNum)
        let picnumA=0
        Obj.map((item,index)=>{
       
            if(item.ispic===true){
                ADDPic(item)  
            }
            
        })
        function ADDPic(item){
            let num=0;
            num=item.sopNum*item.price
            picnumA+=num
        }
        //console.log(picnumA,'ZONGJIA')
        dispatch({
            type:'SHOPPING_PICNUM',
            data:picnumA
        })
    }
}
