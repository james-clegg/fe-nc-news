import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import FeaturedArticles from "./FeaturedArticles";

const HomePage = props => {
  return (
    <>
      <WelcomeMessage user={props.user} className="websiteHeader" />;
      <FeaturedArticles />
    </>
  );
};

export default HomePage;
