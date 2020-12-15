import React, {useState} from 'react';
import './SignUpLandingPage.css';
import SignUpForm from '../../components/SignupForm/SignupForm';
import Logo from '../../Assets/galogo.png'

export default function SignUpLandingPage({history, handleSignupOrLogin}) {
    const [message, setMessage] = useState('')

    const updateMessage = (msg) => {
      setMessage(msg)
    }
    return (
        <div className="sign-up-page">
            <div className="sign-up-logo">
                <img alt="" src={Logo}></img>
            </div>
            <div className="sign-up-form">
                <SignUpForm 
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
                updateMessage={updateMessage}
                />
            </div>
        </div>
    )
}
