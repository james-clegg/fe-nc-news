import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import WebsiteHeader from "./Components/Website-Header";
import NavBar from "./Components/NavBar";
import ListOfAllArticles from "./Components/ListOfAllArticles/ListOfAllArticles";
import HomePage from "./Components/HomePage/HomePage";
import SingleArticlePage from './Components/SingleArticle/SingleArticlePage';

class App extends Component {
  state = {
    user: "JessJelly"
  };

  render() {
    return (
      <div className="App">
        <WebsiteHeader />
        <NavBar />
        <Router>
          <HomePage path="/" user={this.state.user} />
          <ListOfAllArticles path="/articles" />
          <SingleArticlePage path="/articles/:articleID" />
        </Router>
      </div>
    );
  }
}

export default App;
