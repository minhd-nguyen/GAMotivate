import React, { useEffect, useState } from "react";
import { getComment } from "../../services/comments-api";
import ProfileImage from "../../Assets/Profile Image.png";

import "./Comment.css";

const Comment = ({ id, handleDeleteComment, user }) => {
  const [comment, setComment] = useState();

  useEffect(() => {
    getCommentInfo(id);
  }, [id]);

  const getCommentInfo = async (commentId) => {
    const commentInfo = await getComment(commentId);
    setComment(commentInfo);
  };

  return (
    <div className="comment">
      {comment ? (
        <>
          <div>
            <img src={ProfileImage} alt="avatar" className="avatar" />

            <p className="user-details">{comment.postedBy.name}</p>
            <p className="user-details">
              {comment.postedBy.cohort ? comment.postedBy.cohort : "no coh"}
            </p>
          </div>
          <p className="comment-message">{comment.message}</p>
          {comment.postedBy._id === user._id ? (
            <button onClick={() => handleDeleteComment(comment._id)}>
              <i className="far fa-trash-alt"></i>
            </button>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comment;
