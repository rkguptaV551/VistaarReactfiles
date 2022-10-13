import { useState } from "react";

import useZipLookup from './useZipLookup' 

export default function ShippingAddress(props){
  
    const [zipcode, setZipcode] =useState('');
    const [city,state] =useZipLookup(zipcode) ;

const setZip= (e) =>{
    e.preventDefault() ;
    console.log("****")
    setZipcode(e.target.zipcode.value)
}

return(
    <form onSubmit ={setZip}>
        ZipCode: <input   type="text" name="zipcode"/>
        <button  type="submit" >LookUp City/State </button>
        City : {city} <br/>
        State: {state} <br/>
    </form>
)

}