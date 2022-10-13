import useCounter from "./useCounter"

 const CounterComponent =() =>{
 
    const [count, increment,decrement,reset] = useCounter(10,5) ;
    return(
        <div>
            <h1>Counter : {count}</h1>
            <div>
            <button className="btn-btn-primary" onClick={increment}>Increment</button>
            <button className="btn-btn-secondary" onClick={decrement}>Decrement</button>
            <button className="btn-btn-info" onClick={reset}>Reset</button>
            </div>

        </div>
    )
}

export default CounterComponent