import React, { useState, useEffect } from "react"
import userService from "../../services/userService"
import "./UserPage.css"
import { useParams, Link } from "react-router-dom"
import ProfileImage from "../../Assets/Profile Image.png"

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
            <div className="inner-div">
                <div className="background-color-div">
                    <img src="img" alt="img" />
                    <br />
                    {user._id === account._id ? (
                        <Link className="edit" to={`/user/${account._id}/edit`}>
                            Edit Profile
                        </Link>
                    ) : (
                        ""
                    )}
                    <br />
                    <p>
                        <b>{account.name}</b>
                    </p>
                    <br />
                    <p>{account.job}</p>
                    <br />
                    <p>
                        <b>{account.cohort}</b>
                    </p>
                    <br />
                    <p>
                        <b>{account.status}</b>
                    </p>
                    <br />
                    <p>{account.location}</p>
                    <br />
                </div>
                <div className="imgs">
                    <img
                        src="https://i.imgur.com/fm34YyM.png"
                        width="18"
                        alt="world"
                    />{" "}
                    <a href="#portfolio" target="_blank">
                        Portfolio link
                    </a>
                    <br />
                    <img
                        src="https://i.imgur.com/c9Rrzpx.png"
                        alt="linkedin"
                        width="18"
                    />{" "}
                    <a href="#linkedin" target="_blank">
                        LinkedIn link
                    </a>
                    <br />
                    <img
                        src="https://i.imgur.com/LkBsi3O.png"
                        alt="notifcations"
                        width="18"
                    />{" "}
                    Notifications
                </div>
            </div>
            {posts
                ? posts
                      .filter((post) => post.postedBy._id === account._id)
                      .map((post) => (
                          <section className="post">
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
                                  {/* need to pass down replies  */}
                                  <p>{post.comments.length} replies</p>
                              </div>
                          </section>
                      ))
                : ""}
        </div>
    )
}
