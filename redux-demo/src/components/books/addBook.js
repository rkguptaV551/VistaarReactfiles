import { useDispatch } from "react-redux"
import { createBook } from "../../redux/actions/bookAction";
import {useNavigate} from "react-router-dom"
import {useState} from "react"

function AddBook(){

    const dispatch=useDispatch();
    const navigate =useNavigate() ;
    const [book,setBook] = useState({id:"",title:"",author:"",price:0})

    const handleSubmit =(event) => setBook({...book,[event.target.name] : event.target.value })

    const submitForm =(event) =>{
        event.preventDefault();
        console.log(book);
        dispatch(createBook(book)) ;
        navigate("/home")

    }

return(
    <div className="Container">
        <div className="card-header">Add A Book    </div>
        <div className="card-body">
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <input 
                    type="text"
                    name="id"
                    className="form-control"
                    placeholder="Enter a id"
                    value={book.id}
                    onChange ={handleSubmit}
                    />

                </div>
                <div className="form-group">
                    <input 
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Enter a name"
                    value={book.title}
                    onChange ={handleSubmit}
                    />

                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="Enter Author"
                    value={book.author}
                    onChange ={handleSubmit}
                    />

                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="price"
                    className="form-control"
                    placeholder="Enter price"
                    value={book.price}
                    onChange ={handleSubmit}
                    />

                </div>

            <button className="btn btn-primary">Add Book</button>
            </form>

        </div>

         </div>
) ;

}

export default AddBook ;