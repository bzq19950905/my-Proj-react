const FilmData=(state={data:1},action)=>{
    switch(action.type){
        case 'FILM_DATA':

        return {...state,FData:action.data};
        case 'DETAIL_DATA':
        return {...state,FDData:action.data};
        default:
        return state
    }
}
export default FilmData;