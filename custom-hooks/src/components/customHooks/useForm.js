import {useReducer} from "react"

const useForm=() =>{
    const [state,dispatch] =useReducer(
        (state, action) => {

            switch (action.type) { 
            case "Change_Value" :
                return {...state,value:action.value} ;
            case 'Add_Error' : 
            return  {...state,errors:[...state.errors,action.error]}
            
            case "Clear_Errors" :
                return {...state,errors:[]}
            default : return state ;
                    }
         },
         {value:"",errors:[]} //initialization arg
    ) ; //useReducer ends 

    //When we Receive the data entered by the user
    const changeValue = event => {
        const newValue =event.target.value;
        dispatch({type: "Change_Value" , value:newValue}) 
    }

    //Forvalidation for the data entered by the user
    const validateInput = fn =>{

        const error = fn(state.value) ;
        if(error !=null) {
            dispatch({
                type: 'Add_Error',
                error:error
            })
        }

    } //validate input ends

    //Clear Errors
    const clearErrors= () =>
    {
        dispatch({
            type: "Clear_Errors"
        })
    }

return [state,changeValue,validateInput,clearErrors]

}

export default useForm ;