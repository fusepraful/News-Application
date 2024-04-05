import { Link, NavLink } from 'react-router-dom';
import Heading from './Heading';
import Weather from './Weather';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { useAuth } from '../store/auth';

const Header = () => {
    const { user } = useAuth()
    const [dateTime, setDateTime] = useState(null);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const ist = DateTime.now().setZone('Asia/Kolkata');
        setDateTime(ist);
    }, [user]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark py-3 bg-dark pe-5" >
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="d-flex align-items-center " style={{ paddingLeft: "10vh" }}>
                                <li className='text-light nav-item navbar-brand'>
                                    <Heading />
                                </li>
                            </div>
                        </ul>

                        <ul className='d-flex me-2 pt-2'>
                            <li className='pt-2 mx-2 px-2 h6'>
                                <i className="me-2 bi bi-house-fill"></i>
                                <NavLink className="text-light text-decoration-none list-unstyled nav-item" to="/">HOME</NavLink>
                            </li>

                            <li className='pt-2 mx-2 px-2 h6'>
                                <i className="me-2 bi bi-newspaper"></i>
                                <NavLink className="text-light text-decoration-none list-unstyled nav-item" to="/news/allnews">NEWS</NavLink>
                            </li>
                            {user ?
                                (
                                    <>
                                        <li className='pt-2 mx-2 px-2 h6'>
                                            <i className="me-2 bi bi-upload"></i>
                                            <NavLink className="text-light text-decoration-none list-unstyled nav-item" to="/uploadnews">UPLOAD NEWS</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>

                                    </>
                                )}
                            <li className='pt-2 mx-2 px-2 h6'>
                                <i className="me-2 bi bi-people-fill"></i>
                                <NavLink className="text-light text-decoration-none list-unstyled nav-item" to="/about">ABOUT US</NavLink>
                            </li>
                            <li className='pt-2 mx-2 px-2 h6'>
                                <i className="me-2 bi bi-envelope-paper-fill"></i>
                                <NavLink className="text-light text-decoration-none list-unstyled nav-item" to="/contact">CONTACT US</NavLink>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item list-unstyled">
                                    <Link to="/logout" refresh="true" className="nav-link nav-button1 mx-2 rounded text-light"  >Log Out</Link>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item list-unstyled">
                                        <Link to="/register" className="nav-link nav-button1 mx-1 rounded text-light"  >Register</Link>
                                    </li>
                                    <li className="nav-item list-unstyled">
                                        <Link to="/login" className="nav-link nav-button1 mx-1 rounded text-light"  >Login</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='row list-unstyled text-light bg-dark pb-2 pe-5'>
                <div className="col-md-6 nav-item px-5 mx-5 ">
                    <Weather />
                </div>
                <div className='d-flex justify-content-end text-end col-md-5 nav-item'>
                    <span className="h6 ms-3"><i className="mx-2 bi bi-calendar-day-fill"></i></span> {dateTime && dateTime.toFormat('yyyy-MM-dd')}
                    <span className="h6 ms-3"><i className="mx-2 bi bi-clock-fill"></i></span> {dateTime && dateTime.toFormat('HH:mm:ss')}
                    <span className="h6 ms-3"><i className="mx-2 bi bi-calendar-date-fill"></i></span> {dateTime && dateTime.toFormat('EEEE')}
                </div>
            </div>


        </>
    );
};

export default Header;
