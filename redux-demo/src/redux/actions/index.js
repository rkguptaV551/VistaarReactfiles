const increment =() =>{
    return {
        type:'INCREMENT'
    }
}

const decrement =() =>{
    return {
        type:'DECREMENT'
    }
}

const authenticate=() =>{
    return {
        type: 'LOGIN'
    }
}


const deposit =(amount) =>{
    return {
        type:'DEPOSIT',
        payload :{amount :amount}
    }
}

const withdraw =(amount) =>{
    return {
        type:'WITHDRAW',
        payload :{amount :amount}
    }
}

export {increment,decrement,authenticate, deposit,withdraw}