import React, {useState} from 'react';
import './SignUpLandingPage.css';
import SignUpForm from '../../components/SignupForm/SignupForm';
import Logo from '../../Assets/galogo3.png'
import Background from '../../Assets/Background.png';

export default function SignUpLandingPage({history, handleSignupOrLogin}) {
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
        <div className="sign-up-page">
            <div className="sign-up-logo">
            <h2>Where Job Seekers <br /> Empower Job Seekers</h2>
                <p className="content">Come as you are and connect with fellow GA immersive <br />alumni to share what keeps you and your job search motivated. <br />Together we all rise.</p>
            </div>
            <div className="sign-up-form">
                <SignUpForm 
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
                />
            </div>
        </div>
        </div>
    )
}
