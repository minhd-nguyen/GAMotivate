import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import Posts from "../../components/Posts/Posts";

import LoginLandingPage from "../LandingPage/LoginLandingPage";
import SignUpLandingPage from "../LandingPage/SignUpLandingPage";
import PostPage from "../PostPage/PostPage";
import UserPage from "../UserPage/UserPage";
import EditUserPage from "../EditUserPage/EditUserPage";
import ProfileCard from '../../components/ProfileCard/ProfileCard';

import * as postsAPI from "../../services/posts-api";
import userService from "../../services/userService";

import ProfileImage from "../../Assets/Profile Image.png";

import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const postData = await postsAPI.getAll();
    setPosts(postData.reverse());
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route
          exact
          path="/login"
          render={({ history }) => (
            <>
              <LoginLandingPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <>
              <SignUpLandingPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/posts"
          render={() =>
            user ? (
              <div>
                <NavBar user={user} handleLogout={handleLogout} />
                <div className="feed-page">
                  <div className="profile-section">
                    <ProfileCard user={user}/>
                  </div>
                  <div className="post-section">
                    <Posts user={user} posts={posts} setPosts={setPosts} />
                  </div>
                </div>
              </div>
            ) : (
              <Redirect to="/login" />
            )
          }
        ></Route>

        <Route
          exact
          path="/user/:id"
          render={() => (
            <>
              {user ? (
                <>
                <NavBar user={user} handleLogout={handleLogout}/>
                <UserPage user={user} posts={posts} />
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </>
          )}
        ></Route>

        <Route
          exact
          path="/user/:id/edit"
          render={() => (
            <>
              {user ? 
              <>
              <NavBar user={user} handleLogout={handleLogout}/>
              <EditUserPage user={user} />
              </> : <Redirect to="/login" />}
            </>
          )}
        ></Route>

        <Route
          exact
          path="/post/:id"
          render={() => (
            <>
              {user ? (
                <>
                  <NavBar user={user} handleLogout={handleLogout} />
                  <PostPage user={user} posts={posts} />
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </>
          )}
        ></Route>
      </Switch>
    </>
  );
};

export default App;
