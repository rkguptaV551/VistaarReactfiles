import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    // const [navstatus , setNavstatus]  =useState(0) ;
    // const [divwidth, setDivwidth] =useState('0px')




    return (
        <div>
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to="/books" className="navbar-brand">Book List</Link>
                <Link to="/add" className="navbar-brand">Create New</Link>

            </nav>
        </div>
    )

}

