import React from 'react';
import './LandingPage.css'
import LoginPage from '../LoginPage/LoginPage';
import Logo from '../../Assets/galogo3.png';
import Background from '../../Assets/Background.png';

export default function LandingPage({history, handleSignupOrLogin}) {
    return (
        < div className="ga-login" style={{
            background: `url(${Background}) no-repeat center center fixed `,
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
            height: "100vh"
            }}>
        <div>
            <img alt="" src={Logo}></img>
        </div>
        <div className="landing-page">
            <div className="logo-section">
                <h2>Where Job Seekers <br /> Empower Job Seekers</h2>
                <p className="content">Come as you are and connect with fellow GA immersive <br />alumni to share what keeps you and your job search motivated. <br />Together we all rise.</p>
            </div>
            <div className="login-section">
                <LoginPage history={history} handleSignupOrLogin={handleSignupOrLogin}/>
            </div>
        </div>
        </div>
    )
}
