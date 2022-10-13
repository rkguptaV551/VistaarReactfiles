import * as types from "../actions/actionTypes"
export default function bookReducer(state=[], action){
    switch (action.type){
        case types.LOAD_BOOK_SUCCESS :
            return action.books

        case types.CREATE_BOOK :
            return [...state,{...action.book}]

        case types.LOAD_BOOK_DETAIL:
            return {
                ...state , 
                book:action.payload
            }

        case types.DELETE_BOOK:
            return{
                ...state,
            }
    default : 
    return state ;
    }
}