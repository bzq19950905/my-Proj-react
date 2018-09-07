let initData={
    RId:0
}
const storeReduce=(state=initData,action)=>{
    switch (action.type) {
        case 'HELLO':
            return{...state,IndexData:action.data}
        case 'INIT_DATA':
            return{...state,IData:action.data}
        case 'RIGHT_DATA':
        //console.log(action.data)
            return{...state,RId:action.data}    
        case 'LEFT_DATA':
        //console.log(action.data)
            return{...state,LData:action.data}   
        case 'ACTIVE':
            return{...state,active:action.data}       
          
        default:
            return state
    }
}
export default storeReduce