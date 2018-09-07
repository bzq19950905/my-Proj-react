const initData={
    Init:null,
    count:'0',
    picnum:'0'
}
const StoreCK=(store=initData,action)=>{
    switch (action.type) {
        case 'HELLO':
        return {...store,Init:action.data}
        case 'ADD_REDUX':
        return {...store,Add:[...action.data]}
        case 'ADD_COUNT':
        return {...store,count:action.data}
        case 'PIC_NUM':
        return {...store,picnum:action.data}
        default:
            return store
    }
}
export default StoreCK