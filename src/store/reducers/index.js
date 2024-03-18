import { combineReducers } from "redux";
import favoriteReduser from './favoriteReduser';
import characterReduser from './characterReduser'

export default combineReducers({
    favoriteReduser,
    characterReduser 
})