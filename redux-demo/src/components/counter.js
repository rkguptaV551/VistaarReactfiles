import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,authenticate } from "../redux/actions";

export  function Counter(){
const counter = useSelector(state =>state.counter );
const login =useSelector(state =>state.login)

const dispatch =useDispatch();

const btnText =login ? "Logout" :'Login'

return(
<div className="Container">
    <h1>Counter : {counter}</h1>
    <button onClick={() => dispatch(increment(5))}> Increment</button>
    <button onClick={() => dispatch(decrement())}> Decrement</button>

    <section>
       {login ? <h3>LoggedIn</h3>  : <h3>Logged Out</h3>}
    </section>

    <button onClick={() => dispatch(authenticate())}>{btnText}</button>


</div>


)


}