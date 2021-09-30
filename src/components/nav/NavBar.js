import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../../images/c51doglogo.png";

export const NavBar = () => {
    return (
        <>
        <div className="nav__flex">
        
            <img className="logo" src={logo} alt="C51 Dog Grooming Logo" />

            <div className="nav__flex--bar">
                <ul className="navbar">     
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/animals">Animals</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/customers">Customers</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/employees">Employees</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/locations">Locations</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
