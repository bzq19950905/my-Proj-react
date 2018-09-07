export const InitHello=(text)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:'HELLO',
            data:text
        })
    }
}