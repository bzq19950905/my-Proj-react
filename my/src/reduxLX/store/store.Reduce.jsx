let initReduce={
    Hello:'redux'
}
const StoreReduce=(store=initReduce,action)=>{
    switch (action.type) {
        case 'HELLO':
            
            return {...store,Hello:action.data}
    
        default:
            return store
        }
}
export default StoreReduce