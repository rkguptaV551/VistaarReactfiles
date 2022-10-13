import {ComponentC} from "./componentC"
import {NameContext ,ColorContext} from "../../App"

import React, {useContext} from 'react'


export const ComponentB = () =>{
    const name=useContext(NameContext);
    const color =useContext(ColorContext) ;

    return (
    <div>
        <h2>From Component B </h2>
        <div>Name : {name} Color  : {color}</div>
        <h2>Inside B</h2>

        <ComponentC />
   
    </div>
    )
}