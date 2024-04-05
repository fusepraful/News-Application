import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/auth/login"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth()

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      console.log("Login from", response);
      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Login Successful");
        navigate('/');
      } else {
        toast.error(res_data.message ? res_data.message : res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <section className=" " style={{ backgroundColor: '#045a6b' }}>
        <div className="container py-5 h-100">
          <div className="row mb-4 d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row ">
                  <div className="col-md-8 col-lg-5 d-none d-md-block">
                    <img
                      src="https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ="
                      alt="login form"
                      className="h-100"
                      width="110%"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-5 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                          <div className="h1 fw-bold mb-4">
                            <span className='heading-logo p-1 py-3 text-light py-3'>MGN</span>
                          </div>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                          Log In Your Accoutn
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            value={user.email}
                            onChange={handleInput}
                            name="email"
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            value={user.password}
                            onChange={handleInput}
                            name="password"
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button refresh="true" className="btn btn-primary btn-lg btn-block" type="submit">
                            Login
                          </button>
                        </div>

                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                          Don't have an account? <Link to="/register" style={{ color: '#393f81' }}>Register here</Link>
                        </p>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
