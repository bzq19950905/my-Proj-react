import {combineReducers,compose,createStore,applyMiddleware} from 'redux'
import thunkAction from 'redux-thunk'
import storeReduce from './store.Reduce'
const BigStore=combineReducers({
    storeReduce
})
export default createStore(
    BigStore,
    compose(
        applyMiddleware(thunkAction)
    )
)
