import React, { useState, useEffect } from "react"
import userService from "../../services/userService"
import "./UserPage.css"
import { useParams, Link } from "react-router-dom"
import ProfileImage from "../../Assets/Profile Image.png"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

export default function UserPage({ user, posts }) {
    const { id } = useParams()
    const [account, setAccount] = useState({})

    useEffect(() => {
        getAccount()
    }, [])

    const getAccount = async () => {
        const newAccount = await userService.getUserFromId(id)
        setAccount(newAccount)
    }

    return (
        <div className="User">
            <div></div>
            <div className="inner-div">
                <ProfileCard user={account} />
                <div className="user-links">
                    <i className="fas fa-globe-americas fa-2x"></i>&nbsp;
                    <a
                        href={account.portfolio}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Portfolio link
                    </a>
                    &nbsp;&nbsp;
                    <i className="fab fa-linkedin fa-2x"></i> &nbsp;
                    <a href={account.linkedin} rel="noreferrer" target="_blank">
                        LinkedIn link
                    </a>
                </div>
                <Link className="edit-page-btn" to={`/user/${user._id}/edit`}>Edit Profile</Link>
            </div>
            <div className="user-posts">
                <h1 className="user-post-header">{account.name}'s Posts</h1>
                {posts
                    ? posts
                        .filter((post) => post.postedBy._id === account._id)
                        .map((post) => (
                            <section className="post" key={post._id}>
                                <div className="posted-user-details">
                                    <div>
                                        <img
                                            src={ProfileImage}
                                            alt="avatar"
                                            className="avatar"
                                        />
                                        <div>
                                            <p className="user-details">
                                                {post.postedBy.name}
                                            </p>
                                            <p className="user-details">
                                                {post.postedBy.cohort
                                                    ? post.postedBy.cohort
                                                    : "no coh"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="message">
                                    <p>{post.message}</p>
                                </div>
                                <div className="post-bottom-section">
                                    <div className="post-line"></div>
                                </div>
                                <div className="reply-amount">
                                    <p>{post.comments.length} replies</p>
                                </div>
                            </section>
                        ))
                    : ""}
            </div>
        </div>
    )
}
