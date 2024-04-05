import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/auth/register";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const res_data = await response.json();
            console.log("Response from server", res_data.msg);
            if (response.ok) {
                console.log(res_data.token);
                storeTokenInLS(res_data.token);
                setUser({
                    username: "", email: "", phone: "", password: "",
                });
                toast.success("Register Successful");
                navigate('/login');
            } else {
                toast.error(res_data.msg ? res_data.msg : res_data.message);
            }
        } catch (error) {
            console.log("Error From Register Page FE", error);
        }
    };

    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: '#8fc4b7' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <img src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                                    className="w-100" style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }}
                                    alt="Sample_photo"
                                    height="250px" />
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                                    <form className="px-md-2" onSubmit={handleSubmit}>

                                        <div className="form-outline mb-4">
                                            <input onChange={handleInput} value={user.username} name='username' type="text" id="username" className="form-control" />
                                            <label className="form-label" htmlFor="username">Username</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={handleInput} value={user.email} name='email' type="email" id="email" className="form-control" />
                                            <label className="form-label" htmlFor="email">Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={handleInput} value={user.phone} name='phone' type="number" id="phone" className="form-control" />
                                            <label className="form-label" htmlFor="phone">Phone</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={handleInput} value={user.password} name='password' type="password" id="password" className="form-control" />
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>


                                        <div className="text-center">
                                            <button type="submit" className="btn btn-success btn-lg mb-1">Register</button>
                                            <p className='mt-3'>Already Have an Account ? <Link to="/login">LogIn Now</Link> </p>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;
