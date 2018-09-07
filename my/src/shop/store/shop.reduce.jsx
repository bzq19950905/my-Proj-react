let initData={
    ListData:null,
    IData:null,
    DData:null
}
const SaveFruit=(state=initData,action)=>{
    switch(action.type){
        case 'APPLE':

        return {...state,ListData:action.data};
        case 'INDEX_DATA':
      
        return {...state,IData:action.data};
        case 'DETAIL_DATA':
      
        return {...state,DData:action.data};
        console.log(action.data)
        default:
        return state
    }
}
export default SaveFruit;