import React, {useState, useContext} from 'react';
import imageAuth from '../assets/images/02.svg'
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';

export const Auth = () => {
    const auth = useContext(AuthContext);
    const {loading, request, error} = useHttp()
    const [form, setForm] = useState({
        email : "",
        password: ""
    });

    const changeHandler = event => {
        setForm({...form, [event.target.name] : event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/signup', 'POST', {...form});
            console.log(data);
        }
        catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/signin', 'POST', {...form});
            auth.login(data.token, data.userId)
        }
        catch (e) {}
    }

    return (
        <div className="wrapper">
            <div 
            className="alert alert-success succ"
            >
            </div>
            <main>
                <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                                <div className="p-3 p-lg-5">
                                    <div className="text-center">
                                        <h2 className="fw-bold pb-2">Welcome to our largest<br/> community</h2>
                                        <p className="mb-0 h6 fw-light">Let's learn something new today!</p>
                                    </div>
                                    <img src={imageAuth} className="mt-5" alt="" />
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 m-auto">
                                <div className="row my-5">
                                    <div className="col-sm-10 col-xl-8 m-auto">
                                        <span className="mb-0 fs-1">👋</span>
                                        <h1 className="fs-2 fw-bold">Sign up into Link shortner</h1>
                                        <p className="lead mb-4 col-gr">Nice to see you! Please log in with your account.</p>

                                        <form id="loginForm">    
                                            <div className="mb-4">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                                                <div className="input-group input-group-lg">
                                                    <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control border-0 bg-light rounded-end ps-1"
                                                        placeholder="E-mail"
                                                        id="exampleInputEmail1"
                                                        value={form.email}
                                                        onChange={changeHandler}
                                                        />
                                                </div>
                                            </div>
                                        
                                            <div className="mb-4">
                                                <label htmlFor="inputPassword5" className="form-label">Password *</label>
                                                <div className="input-group input-group-lg">
                                                    <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-key-fill"></i></span>
                                                    <input  
                                                        type="password"
                                                        name="password"
                                                        className="form-control border-0 bg-light rounded-end ps-1"
                                                        placeholder="Password" 
                                                        value={form.password}
                                                        id="inputPassword5"
                                                        onChange={changeHandler}  
                                                    />
                                                </div>
                                                <div id="passwordHelpBlock" className="form-text">
                                                    Your password must be 8 characters at least 
                                                </div>
                                            </div>
                                            
                                            <div className="mb-4 d-flex justify-content-between mb-4">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                                </div>
                                                <div className="text-primary-hover">
                                                    <a href="#" className="text-secondary">
                                                        <u>Forgot password?</u>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="align-items-center mt-0">
                                                <div className="">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary me-2"
                                                        onClick={registerHandler}
                                                        disabled={loading}
                                                    >
                                                        Sign Up
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary mb-0"
                                                        onClick={loginHandler}
                                                        disabled={loading}
                                                    >
                                                        Sign In
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="row">
                                            <div className="position-relative my-4">
                                                <hr/>
                                                <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                                            </div>

                                            <div className="col-xxl-6 d-grid">
                                                <a href="#" className="btn bg-google mb-2 mb-xxl-0"><i className="bi bi-google me-2"></i>Login with Google</a>
                                            </div>
                                            <div className="col-xxl-6 d-grid">
                                                <a href="#" className="btn bg-facebook mb-0"><i className="bi bi-facebook me-2"></i>Login with Facebook</a>
                                            </div>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <span>Don't have an account? <a href="sign-up.html">Signup here</a></span>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </section>
            </main>
        </div>
    );
}