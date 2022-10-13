import { useDispatch, useSelector } from "react-redux";

import {deposit,withdraw} from "../redux/actions"

export function BankTransaction(){

const balance =useSelector(state => state.balance) ;

const dispatch=useDispatch();

return(
    <div className="Container">
        <h1>Balance : {balance}</h1>
        <button onClick={() => dispatch(deposit(5000))}> DEPOSIT</button>
        <button onClick={() => dispatch(withdraw(1000))}> Withdraw</button>

</div>
)
}