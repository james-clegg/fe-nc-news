import React from "react";

const WelcomeMessage = props => {
  return (
    <p className="listOfArticlesHeader">Welcome to Northcoders News, {props.user}!</p>
  );
};

export default WelcomeMessage;
