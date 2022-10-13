import *  as types from "./actionTypes"
import * as bookApi from  "../../api/bookApi" ;
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";


export function loadBooksSuccess(books){
    return {
        type:types.LOAD_BOOK_SUCCESS,books
    }
}

export function loadBooks() {
    return function(dispatch)  {
        return bookApi.getBooks().then(books => {
            dispatch(loadBooksSuccess(books))

        }).catch(error => {
            throw error ;
        })
    }
}

export const createBook =(book) => {
    return {
        type: types.CREATE_BOOK,
        book
    }
}


export const getBook =(id) => async dispatch => {
    const result =await axios.get(`http://localhost:3001/books/${id}`)
    console.log("Book Detail :" + result)

    dispatch({
        type:types.LOAD_BOOK_DETAIL,
        payload:result.data
    })
}


export const deleteBook=(id) => async dispatch =>{
    const result =await axios.get(`http://localhost:3001/books/${id}`)
    dispatch({
        type:types.DELETE_BOOK,
        payload:id
    })
}