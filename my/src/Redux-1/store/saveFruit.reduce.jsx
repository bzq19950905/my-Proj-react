let initData={
    apple:null
}
const SaveFruit=(state=initData,action)=>{
    switch(action.type){
        case 'APPLE':
        return {...state,apple:action.data};
        default:
        return state
    }
}
export default SaveFruit;