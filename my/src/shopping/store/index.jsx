import {combineReducers,createStore,compose,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import StoreCK from './store.Reduce.jsx'

const BigStore=combineReducers({
    StoreCK
})
export default createStore(
    BigStore,
    compose(
        applyMiddleware(thunkMiddleware)
    )
)