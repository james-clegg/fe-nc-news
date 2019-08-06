import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import NCicon from "./Logo";

const HomePage = props => {
  return (
    <>
      <WelcomeMessage user={props.user}/>
      <NCicon />
    </>
  );
};

export default HomePage;
