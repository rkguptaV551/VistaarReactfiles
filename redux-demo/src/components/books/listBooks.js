import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../redux/actions/bookAction";
import { Link } from "react-router-dom";

export default function ListBooks(){
    
    const books=useSelector(state => state.books) ;
    const dispatch =useDispatch();

    useEffect(() => {
        dispatch(loadBooks()).then(console.log(books))
       
    },[]

    );


    const bookList =(
        <ul>
            {books.map(bk => <li key={bk.id}>  #{bk.id} , Title : <Link to={`/books/${bk.id}`}>  {bk.title} </Link> , Author :{bk.author} , Price : Rs. {bk.price} </li>)}
        </ul>
    )


    return (
        <div>
            <h1>ListOf Books Avialable</h1>
            {bookList}
        </div>
    )

}