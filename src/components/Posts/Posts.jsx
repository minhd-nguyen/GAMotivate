import React, { useEffect, useState } from "react"
import * as postsAPI from "../../services/posts-api"
import Post from "../Post/Post"

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postData = postsAPI.getAll()
        postData.then((res) => setPosts(res))
    }, [])

    const showPosts = posts.reverse().map((post) => {
        return (
            <Post key={post._id} message={post.message} cohort={post.cohort} />
        )
    })

    return (
        <>
            <h1>Post Feed</h1>
            {showPosts}
        </>
    )
}

export default Posts
