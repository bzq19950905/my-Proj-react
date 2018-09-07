import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import SaveFruit from './saveFruit.reduce.jsx';
const BigStore=combineReducers({
    SaveFruit
});
export default createStore(
    BigStore,
    compose(
        applyMiddleware(thunkMiddleware)
    )
)