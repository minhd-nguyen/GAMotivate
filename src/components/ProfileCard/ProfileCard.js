import React from 'react';
import './ProfileCard.css'

export default function ProfileCard({user}) {
    return (
        <div className="profile-card">
            <div className="profile-image">
                <i className="fal fa-user-circle fa-10x"></i>
            </div>
            <div className="profile-info">
                <p className="profile-name">{user.name}</p>
                <p className="profile-special">Cohort: {user.cohort ? user.cohort : 'No cohort yet'}</p>
                <p className="profile-location">City: {user.location ? user.location : "No city yet"}</p>
            </div>
        </div>
    )
}
