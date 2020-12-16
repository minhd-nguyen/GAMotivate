import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../../Assets/Profile Image.png";
import CommentButton from "../../Assets/Comment Button.png";
import SaveButton from "../../Assets/Save button.png";
import "./Post.css";
import { getPostFromId } from "../../services/posts-api";

const Post = ({ id, user, handleDeletePost }) => {
  const [post, setPost] = useState();

  useEffect(() => {
    getPostInfo(id);
  }, [id]);

  const getPostInfo = async (postId) => {
    const postInfo = await getPostFromId(postId);
    setPost(postInfo);
  };

  return (
    <>
      {post ? (
        <section className="post">
          <div className="posted-user-details">
            <div>
              <img src={ProfileImage} alt="avatar" className="avatar" />
              <div>
                <p className="user-details">{post.postedBy.name}</p>
                <p className="user-details">
                  {post.postedBy.cohort ? post.postedBy.cohort : "no coh"}
                </p>
              </div>
            </div>

            {user._id === post.postedBy._id ? (
              <div
                className="post-delete-btn"
                onClick={() => handleDeletePost(post._id)}
              >
                <i className="far fa-trash-alt"></i>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="message">
            <p>{post.message}</p>
          </div>
          <div className="post-bottom-section">
            <div className="post-line"></div>
            <img src={SaveButton} alt="Save Button" className="save-post-btn" />

            <Link to={`/post/${post._id}`}>
              <img
                src={CommentButton}
                alt="comment button"
                className="comment-btn"
              />
            </Link>
          </div>
          <div className="reply-amount">
            <img src={ProfileImage} alt="avatar" className="avatar-bottom" />
            {/* need to pass down replies  */}
            <p>{post.comments.length} replies</p>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Post;
