let initData={
    Hello:'',
    D_initD:null
}
const DetailReduce=(store=initData,action)=>{
    switch (action.type) {
        case 'HELLO':
            return{...store,Hello:action.data}
        case 'INIT_DATA':
            return{...store,D_initD:action.data}
        default:
            return store
    }
}
export default DetailReduce