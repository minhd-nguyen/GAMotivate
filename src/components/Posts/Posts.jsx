import React, { useEffect, useState } from "react"
import * as postsAPI from "../../services/posts-api"
import './PostForm.css';
import Post from "../Post/Post"

import "./PostForm.css"

const Posts = ({ user, posts, getPosts }) => {
    const [message, setMessage] = useState({
        message: "",
        postedBy: user._id,
    })

    const initializeNewPost = () => {
        setMessage({
            ...message,
            message: "",
        })
    }

    const handleChange = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value,
        })
    }

    const handleMessageSubmit = async (e) => {
        e.preventDefault()
        if (message.message) {
            try {
                await postsAPI.create(message)
                initializeNewPost()
                getPosts()
            } catch (err) {
                console.log(err)
            }
        }
    }

    const showPosts = posts.map((post) => {
        return <Post key={post._id} post={post} />
    })

    return (
        <>
            {user ? (
                <div className="post-form">
                <form onSubmit={handleMessageSubmit} >
                <h1 className="post-title">MOTIVATE</h1>
                    <div className="main-post">
                        <textarea
                            onChange={handleChange}
                            className="post-input"
                            type="text"
                            placeholder="What's up?"
                            name="message"
                            value={message.message}
                        ></textarea>
                    </div>
                    <div className="post-btn-section">
                        <button className="post-btn" type="submit">
                            Post
                        </button>
                    </div>
                </form>
                </div>
            ) : (
                ""
            )}
            <h1>Post Feed</h1>
            {posts ? showPosts : ""}
        </>
    )
}

export default Posts
