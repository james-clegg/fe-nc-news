import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import WebsiteHeader from "./Components/Website-Header";
import ListOfAllArticles from "./Components/ListOfAllArticles/ListOfAllArticles";
import HomePage from "./Components/HomePage/HomePage";
import SingleArticlePage from "./Components/SingleArticle/SingleArticlePage";
import BurgerMenu from "./Components/BurgerMenu";
import NCicon from "./Components/NCicon";
import UserProfilePage from "./Components/UserProfilePage/UserProfilePage";

class App extends Component {
  state = {
    user: "jessjelly"
  };

  render() {
    return (
      <div className="App">
        <WebsiteHeader />
        <BurgerMenu username={this.state.user} />
        <NCicon />
        <Router>
          <HomePage path="/" user={this.state.user} />
          <ListOfAllArticles path="/allArticles" />
          <SingleArticlePage
            path="/articles/:articleID"
            user={this.state.user}
          />
          <UserProfilePage path={`/users/:username`} />
        </Router>
      </div>
    );
  }
}

export default App;
