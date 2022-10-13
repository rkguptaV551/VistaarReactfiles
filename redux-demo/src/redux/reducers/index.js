import {combineReducers} from "redux"
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
import balanceReducer from "./balanceReducer" ;
import bookReducer from "./bookReducer"

const allReducers=combineReducers({
    counter : counterReducer,
    login:loginReducer,
    balance:balanceReducer,
    books:bookReducer
})

export default allReducers;