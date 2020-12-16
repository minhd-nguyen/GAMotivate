import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../components/Comment/Comment";
import { getPostFromId } from "../../services/posts-api";
import * as commentAPI from "../../services/comments-api";
import ProfileImage from "../../Assets/Profile Image.png";
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import "./PostPage.css";






const PostPage = ({ posts, user }) => {
  const { id } = useParams();
  const [post, setPost] = useState(posts.filter((post) => post._id === id));
  const [comment, setComment] = useState({
    message: "",
    postedBy: user._id,
  });

  useEffect(() => {
    getPostInfo(id);
  }, [id]);

  const getPostInfo = async (postId) => {
    const postInfo = await getPostFromId(postId);
    setPost(postInfo);
  };

  const handleCommentChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.message) {
      try {
        const newComment = await commentAPI.create(comment, id);
        setComment({ ...comment, message: "" });
        setPost({
          ...post,
          comments: [...post.comments, newComment],
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const deletedComment = await commentAPI.deleteComment(commentId);
      setPost({
        ...post,
        comments: post.comments.filter(
          (comment) => comment._id !== deletedComment._id
        ),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {typeof post.postedBy === "object" ? (
        <div className="postPage">
            <div className="post-page-profile">
         <ProfileCard  user={user}/>
            </div>
          <section className="post-page-form">
            <div className="thread-container">
              <section className="post-page">
                <div className="posted-user-details">
                  <div>
                    <img
                      src={ProfileImage}
                      alt="avatar"
                      className="post-page-avatar"
                    />
                    <div>
                      <p className="post-page-name">{post.postedBy.name}</p>
                      <p className="user-details">
                        {post.postedBy.cohort ? post.postedBy.cohort : "no coh"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="message">
                  <p>{post.message}</p>
                </div>
              </section>
              <div className="post-page-line"></div>
              {post.comments ? (
                <div className="comments">
                  {post.comments.map((comment) => (
                    <Comment
                      key={comment._id}
                      id={comment._id}
                      user={user}
                      handleDeleteComment={handleDeleteComment}
                    />
                  ))}
                </div>
              ) : (
                "No Comments"
              )}
              {user ? (
                <form onSubmit={handleCommentSubmit}>
                  {post.comments.length > 0 ? (
                    <div className="post-page-line"></div>
                  ) : (
                    ""
                  )}
                  <div className="main-post-page">
                    <textarea
                      className="post-page-input"
                      placeholder="Post a question or something that motivates you"
                      name="message"
                      onChange={handleCommentChange}
                      value={comment.message}
                    ></textarea>
                  </div>
                  <button className="post-page-btn">Post</button>
                </form>
              ) : (
                ""
              )}
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PostPage;
