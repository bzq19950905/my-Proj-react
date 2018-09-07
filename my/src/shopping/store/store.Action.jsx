import axios from 'axios';
import '../mock/index.jsx';
export const InitHello =()=>{
    return(dispatch,getState)=>{
        axios.get('/api/list').then(res=>{
            dispatch({
                type:'HELLO',
                data:res.data
            })
        })
    }
}
export const AddRedux=(data)=>{
     return(dispatch,getState)=>{
         let InitData = getState().StoreCK.Init.data
         let count=getState().StoreCK.count
         let obj=[...InitData]
         let objPic=[...InitData]
         let ScreenData=obj.filter((item)=>{
             return item.id===data.id
         })
         if(data.type==='+'){
            ScreenData[0].num++
            count++
         }else{
           if(ScreenData[0].num>0){
            ScreenData[0].num--
            count--
           }
         }
         //计算总价
         let PicNum=0 
        objPic.map((item,index)=>{
           
            Add(item,PicNum)
            function Add(item){
                let num=0;
                num=item.pic*item.num;
                PicNum+=num
            }
           
        })
         dispatch({
             type:'ADD_REDUX',
             data:obj
         })
         dispatch({
            type:'ADD_COUNT',
            data:count
        })
        dispatch({
            type:'PIC_NUM',
            data:PicNum
        })
     }
}