import useForm from './useForm' ;
const  UserNameForm =() => {
    const [state,changeValue,validateInput,clearErrors] =useForm() ;

    const validate =() =>{
        clearErrors() ;
        validateInput(v => v.length < 5 ? "User name must be atleast 5 characters" : null) 
        validateInput(v => v.toLowerCase() ==="test" ? "User name can not be test" : null) 
    }

    return (
        <div className='container'> 
        <h1>User Registration</h1> 
        <ul className='text-danger text-white m-2 p-2'>
            {
                state.errors.map ( (err,i ) => {
                        return <li key={i}> {err} </li>
                 })
            }
        </ul>
        <input  className='form-control' type="text" onChange={changeValue} />
        <button className='btn btn-secondary' onClick={validate}> SUBMIT</button>

        <br />
        <h1>Entered Name : {state?.value}</h1>
        </div>
    )
}

export default UserNameForm ;