import React from "react";
import '../css/Topnav.css'
import Filters from "./Filter";

const Navbar = () => {

    return (
        <div className="navbar-c-items">
            <input placeholder='    Rechercher...' className='searchbar'></input>
            <Filters />
        </div>
    )
}

export default Navbar;
