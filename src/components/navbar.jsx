import React from "react";

import "./navbar.css";

import { Link } from "react-router-dom";

export const Navbar=()=>{

    return(
        <div className="navbar">
            <div className="link">
                <Link to="/">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>

        </div>
    )
}




