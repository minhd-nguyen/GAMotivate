import React, { useState } from "react"
import { Link } from "react-router-dom"

import userService from "../../services/userService"

import "./LoginPage.css"

const LoginPage = ({ history, handleSignupOrLogin }) => {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userService.login(loginInfo)
            handleSignupOrLogin()
            history.push("/posts")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="LoginPage">
          <h3 className="login-title">Log in to your account.</h3>
            <form
                className="col s12"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="text"
                            autoComplete="off"
                            id="email"
                            className="active"
                            value={loginInfo.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="password"
                            autoComplete="off"
                            className="active"
                            id="password"
                            value={loginInfo.password}
                            name="password"
                            onChange={handleChange}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="login-btn btn yellow">Log In</button>
                    </div>
                </div>
            </form>
            <hr ></hr>
            <div className="login-signup">
              <h3 className="sign-title">New to Motivate?<br /> Create your account</h3>
              <Link className="sign-btn" to="/signup">Sign up</Link>
            </div>
        </div>
    )
}

export default LoginPage
