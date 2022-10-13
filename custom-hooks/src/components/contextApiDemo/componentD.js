
import {NameContext ,ColorContext} from "../../App"

import React, {useContext} from 'react'

export function ComponentD(){

    const name=useContext(NameContext);
    const color =useContext(ColorContext) ;

    return (
        <>
        <h1>This is D</h1>
        <h4>User NAme : {name}  Favorite Color : {color}</h4>
        </>
    )
}