import * as actionTypes from './actionTypes'

export const setSearchField = text => {
    return {
        type: actionTypes.CHANGE_SEARCH_FIELD,
        payload: text
    }
}

