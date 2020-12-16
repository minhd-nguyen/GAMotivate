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
                <p className="profile-special">{user.cohort}</p>
                <p className="profile-location">{user.location}</p>
            </div>
        </div>
    )
}
