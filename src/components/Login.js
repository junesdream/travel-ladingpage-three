import React from 'react'

const Login = () => {
    return (
        <>
            <section className="login">
                <div className="login-overlay">
                    <form className="form-control">
                        <input type="email" name="email" id="email" placeholder="Your email adresse" required/>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required/>
                    <button className="submit">Login</button>
                    </form>
                </div>
            </section>
        </>
    );
    }
export default Login
