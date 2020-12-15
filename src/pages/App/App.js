import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

import Posts from '../../components/Posts/Posts';

import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";


import * as postsAPI from "../../services/posts-api"

import userService from "../../services/userService";

import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState("");

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
        const postData = await postsAPI.getAll()
        setPosts(postData.reverse())
    }

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/login" render={({history}) => 
          <>
            <LoginPage 
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          </>
        }></Route>

        <Route exact path="/signup" render={({history}) => 
          <>
            <SignupPage 
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          </>
        }></Route>
        
        <Route exact path="/posts" render={() => 
          <div>
            <Posts user={user} posts={posts} getPosts={getPosts}/>
          </div>
        }>
        </Route>
      </Switch>
    </>
  );
};

export default App;
