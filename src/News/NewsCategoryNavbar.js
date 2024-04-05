import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsCategoryNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-news-navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex align-item-center justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className="nav-link text-white h5 mx-3" to="/news/allnews">All News </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white h5 mx-3" to="/news/indian">Indian News </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white h5 mx-3" to="/news/international">International News </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white h5 mx-3" to="/news/local">Local News </NavLink> 
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NewsCategoryNavbar