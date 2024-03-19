import { omit } from "lodash"
import { ADD_CARDSLIST, REMOVE_CARD } from '../constans/actionType'
import { getLocalStorage } from "../../utils/localStorage";

const initialState = {};

const characterReduser = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_CARDSLIST:
            return {
                ...state,
                ...action.payload
            } 
            default:
                return state;
    }
}
export default characterReduser;