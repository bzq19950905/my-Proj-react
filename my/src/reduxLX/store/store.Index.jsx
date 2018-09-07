import {combineReducers,createStore,compose,applyMiddleware} from 'redux'
import thunkAction from 'redux-thunk'
import StoreReduce from './store.Reduce'
const BigStore=combineReducers({
    StoreReduce
})
export default createStore(
    BigStore,
    compose(
        applyMiddleware(thunkAction)
    )
)
