import React, { useState } from "react"
import * as postsAPI from "../../services/posts-api"
import "./PostForm.css"
import Post from "../Post/Post"

import "./PostForm.css"

const Posts = ({ user, posts, setPosts, getPosts }) => {
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
                const newPost = await postsAPI.create(message)
                const populatedPost = await postsAPI.getPostFromId(newPost._id)
                initializeNewPost()
                setPosts([populatedPost, ...posts])
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleDeletePost = async (id) => {
        try {
            const deletedPost = await postsAPI.deleteOne(id)
            console.log(deletedPost)
            setPosts(posts.filter((post) => post._id !== deletedPost._id))
        } catch (err) {
            console.log(err)
        }
    }

    const showPosts = posts.map((post) => {
        return (
            <Post
                key={post._id}
                id={post._id}
                user={user}
                handleDeletePost={handleDeletePost}
                posts={posts}
            />
        )
    })

    // const customButton = document.getElementById("custom-button")
    // const realButton = document.getElementById("real-btn")
    // const customText = document.getElementById("custom-text")

    //   customButton.addEventListener("click", function() {
    //       realButton.click()
    //   })

    //   realButton.addEventListener("change", function() {
    //       if(realButton.value) {
    //           customText.innerHTML = realButton.value
    //       }
    //   })

    return (
        <>
            {user ? (
                <>
                <div className="post-form">
                    <form onSubmit={handleMessageSubmit}>
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
                            <span id="custom-text"></span>
                            <input
                                id="real-btn"
                                type="file"
                                hidden="hidden"
                            ></input>
                            <i
                                id="custom-button"
                                className="fas fa-image fa-2x"
                            ></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fas fa-music fa-2x"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fas fa-video fa-2x"></i>
                            <button className="post-btn" type="submit">
                                Post
                            </button>
                        </div>
                    </form>
                </div>
                <div className="left">
                    <button className="refresh-btn" onClick={() => getPosts()}><i className="fas fa-sync fa-1.5x"></i>&nbsp;Refresh</button>
                </div>
                </>
            ) : (
                ""
            )}
            {posts ? (
                <section className="post-container">{showPosts}</section>
            ) : (
                ""
            )}
        </>
    )
}
export default Posts
