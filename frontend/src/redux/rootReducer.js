import { combineReducers } from 'redux';
import GameReducer from '../redux/reducers/GameReducer'
import RouteReducer from '../redux/reducers/RouteReducer'

export default combineReducers({
        GameData: GameReducer,
        Routes: RouteReducer
})
