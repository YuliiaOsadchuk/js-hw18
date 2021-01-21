import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import HomePage from "./components/home/HomePage";
import PostPage from "./components/post/PostPage";
import PhotosPage from "./components/photos/PhotosPage";
import ContactsPage from "./components/contacts/ContactsPage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navigation-wrapper">
          <div className="link-list">
            <NavLink
              to="/home"
              className="app-link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/posts"
              className="app-link"
              activeClassName="active-link"
            >
              Posts
            </NavLink>
            <NavLink
              to="/photos"
              className="app-link"
              activeClassName="active-link"
            >
              Photos
            </NavLink>
            <NavLink
              to="/contacts"
              className="app-link"
              activeClassName="active-link"
            >
              Contacts
            </NavLink>
          </div>
        </nav>
        <div className="page">
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/posts" component={PostPage}></Route>
            <Route path="/photos" component={PhotosPage}></Route>
            <Route path="/contacts" component={ContactsPage}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
