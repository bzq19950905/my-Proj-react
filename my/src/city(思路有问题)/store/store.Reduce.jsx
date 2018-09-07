const storeReduce=(state={active:0},action)=>{
    switch (action.type) {
        case 'HELLO':
            return{...state,IndexData:action.data}
        case 'INIT_DATA':
            return{...state,IData:action.data}
        case 'RIGHT_DATA':
        console.log(action.data)
            return{...state,RData:action.data}    
        case 'LEFT_DATA':
            return{...state,LData:action.data}   
        case 'ACTIVE':
            return{...state,active:action.data}       
        case 'XG_RIGHT_DATA':
            console.log(action.data)
            return{...state,RData:action.data}    
        default:
            return state
    }
}
export default storeReduce