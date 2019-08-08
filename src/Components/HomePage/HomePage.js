import React from "react";
import WelcomeMessage from "./WelcomeMessage";

const HomePage = props => {
  return <WelcomeMessage user={props.user} />;
};

export default HomePage;
