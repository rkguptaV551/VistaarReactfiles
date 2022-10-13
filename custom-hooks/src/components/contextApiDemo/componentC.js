import { NameContext } from "../../App"
import { ColorContext } from "../../App"

export const ComponentC= () =>{
    return (
    <div>
        <h2>From Component C </h2>
        <NameContext.Consumer>
            { 
            name => {
                return ( 
                    <ColorContext.Consumer>
                    {color => {
                      return  <div>Name : {name}  Color : {color}</div>
                    }}

    </ColorContext.Consumer>
                   )
                
            }

            }
        </NameContext.Consumer>
      
    </div>)
}

