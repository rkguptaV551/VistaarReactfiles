import bookReducer from "../redux/reducers/bookReducer";
import { handleError,handleResponse } from "./apiUtils";
const  baseUrl="http://localhost:3001/books"
//request get
//api/books
export function  getBooks(){
    return fetch(baseUrl).then(handleResponse).catch(handleError)
}
//request post endpoint
//api/books
export function saveBook(book){
    return fetch(baseUrl +(book.id ||  "") ,{
        method : book.id  ? "PUT" :"POST" , //POST for Create PUT to update when id already exists 
        headers : {"content-type" : "application/json"},
        body: JSON.stringify(book) 
    }).then (handleResponse).catch(handleError) ;
}