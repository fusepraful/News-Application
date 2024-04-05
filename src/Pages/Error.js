import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="page-not-found text-center py-2 d-flex align-items-center justify-content-center">
                <div className="bg-light shadow w-50 rounded my-4 ">
                    <div className="py-3">
                        <h2>
                            4<i className="bi bi-bug"></i>4
                        </h2>
                        <h3 className="mt-4 text-subhead">Oops! Page Not Found</h3>
                        <p>
                            You Are Looking For Wrong Page !
                            <br />
                            Go Back To Bellow Pages !
                        </p>
                        <div className="mt-5 ">
                            <Link to="/" type="button" className="btn m-2 m-md-0 btn-primary">
                                <i className="text-light bi bi-house-door-fill"></i> Back Home
                            </Link>
                            &nbsp;&nbsp;
                            <Link to="/contact" type="button" className="btn m-2 m-md-0 btn-success">
                                <i className="bi text-light bi-person-lines-fill"></i> Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;
