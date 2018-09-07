let initData ={
    index:'',
    initD:null,
    shoppingCartNum:'0',
    shoppingData:[],
    shoppingPicNum:0
}
const ListReduce=(store=initData,action)=>{
  
    switch (action.type) {
        case 'HELLO':
            return {...store,index:action.data}
        case 'INIT_DATA':
        //console.log(action.data)
            return {...store,initD:action.data}    
        case 'SHOPPING_NUM':
        //console.log(action.data)
            return{...store,shoppingCartNum:action.data}
        case 'SHOPPING_DATA':
            //console.log(action.data)
            return{...store,shoppingData:action.data}
        case 'SHOPPING_PICNUM':
            //console.log(action.data)
            return{...store,shoppingPicNum:action.data}
        default:
            return store
    }
}
export default ListReduce