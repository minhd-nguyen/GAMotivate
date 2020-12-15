import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <>
      <section className="post">
        <div>
          <img src="#" alt="avatar" />
          <p>username</p>
          <p>{props.cohort ? props.cohort : "no cohort"}</p>
        </div>
        <div className="message">
          <p>{props.message ? props.message : "no message"}</p>
          <button>Ask</button>
          <button>Motivate</button>
        </div>
      </section>
    </>
  );
};

export default Post;
