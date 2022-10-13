import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams} from "react-router-dom";
import { deleteBook, getBook } from "../../redux/actions/bookAction";

export const BookDetail =() => {
    const dispatch =useDispatch(); 
    const book =useSelector(state => state.books.book) ;
    const navigate =useNavigate

    const {id}=useParams() ; 


    useEffect(() => {
        loadBook()
    } , [])


    const loadBook =() => {
        console.log("Id Received " ,id)
    const  bid  =Number(id) ;
        if(!isNaN (bid)){
            dispatch(getBook(bid)) 
        }
    }
    

    const handleDelete =()=>{
                 console.log("Button clicked for delete " +book);
         const  bid  =Number(id) ;
         if(bid!==0  && !bid.isNaN)
       {
        console.log("Id is " + bid)
        dispatch(deleteBook(bid)) ;
       }
 

  

    }
    if(book==null){
        return (<div>Book Id Not found.</div>)
    }
    
    return (
        <div>
            <h1>Book Details  </h1>
            <div className="container">
                <div className="py-5">
                <h1 className="display-4 mb-3">{book?.title}</h1>
                    <h4> Author :  {book?.author }   Price : {book?.price} </h4>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>

            </div>

            <button className="btn btn-danger m-2 p-2" type="submit" onClick={handleDelete}> Delete </button>

        </div>
    )

}