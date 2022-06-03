import  * as actionTypes from './actionTypes'

const initalState ={
    searchField: ''
}

export const movieSearch = (state= initalState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_SEARCH_FIELD:
            return{
                ...state,
                searchField: action.payload
            }
        default:
            return state
    }
}