import React from "react"
import "./Post.css"

const Post = ({ post }) => {
    return (
        <>
            {post ? (
                <section className="post">
                    <div>
                        <img src="" alt="avatar" />
                        <p>{post.postedBy.name}</p>
                        <p>
                            {post.postedBy.cohort
                                ? post.postedBy.cohort
                                : "no cohort"}
                        </p>
                    </div>
                    <div className="message">
                        <p>{post.message}</p>
                        <button>Ask</button>
                        <button>Motivate</button>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    )
}

export default Post
