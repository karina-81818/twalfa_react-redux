import { object } from 'prop-types'
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE, ADD_CARDSLIST, REMOVE_CARD } from '../../store/constans/actionType'

export const setPersonTofavorite = person => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
})
export const removePersonTofavorite = personId => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
})
export const setCardList = id=>({
    type: ADD_CARDSLIST,
    payload: id
})
export const removeCard = personId=>({
    type: REMOVE_CARD,
    payload: personId
})