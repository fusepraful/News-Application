import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-center py-3 text-light">
                <div className="footer-copyright text-center h4  py-2">© 2024 Copyright :
                    <Link to="/" className='text-decoration-none text-light'> <span style={{color:"rgb(10, 144, 144)"}}>MG</span> DAILY NEWS</Link>
                </div>
                <div className=""></div>
                <Link to="/termsandconditions" className="mx-2 text-light">
                    Privacy policy
                </Link> | 
                <Link to="/about" className="mx-2 text-light">
                    About Us
                </Link> |
                <Link to="/contact" className="mx-2 text-light">
                    Contact Us
                </Link> 
            </div>
        </>
    )
}

export default Footer