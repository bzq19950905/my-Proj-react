import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import SaveFruit from './shop.reduce.jsx';
//电影的数据仓库
import FilmData from './film/film.reduce.jsx';
const BigStore=combineReducers({
    SaveFruit,
    FilmData
});
export default createStore(
    BigStore,
    compose(
        applyMiddleware(thunkMiddleware)
    )
)