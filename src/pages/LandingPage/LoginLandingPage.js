import React from 'react';
import './LandingPage.css'
import LoginPage from '../LoginPage/LoginPage';
import Logo from '../../Assets/galogo.png'

export default function LandingPage({history, handleSignupOrLogin}) {
    return (
        <div className="landing-page">
            <div className="logo-section">
            <img alt="" src={Logo}></img>
            </div>
            <div className="login-section">
                <LoginPage history={history} handleSignupOrLogin={handleSignupOrLogin}/>
            </div>
        </div>
    )
}
