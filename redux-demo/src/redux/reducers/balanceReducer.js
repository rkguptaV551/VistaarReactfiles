const balanceReducer =(state=1000,action) => {
    switch(action.type){
    case 'DEPOSIT' :
        return state + action.payload.amount 
    case 'WITHDRAW' :
            return state - action.payload.amount 
    default : return state ;

    }
}

export default balanceReducer ;