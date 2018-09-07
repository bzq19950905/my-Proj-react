import {combineReducers,createStore,compose,applyMiddleware} from 'redux'
import thunkAction from 'redux-thunk'
import ListRReduce from './list/list.Reduce'
import DetailReduce from './detail/detail.Reduce'
//console.log(ListRReduce)
const BigStore = combineReducers({
    ListRReduce,
    DetailReduce
})
export default createStore(
    BigStore,
    compose(
        applyMiddleware(thunkAction)
    )
)