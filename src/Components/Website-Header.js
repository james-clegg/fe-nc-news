import React from "react";
import logo from "../Images/Northcoders_N.png";

const WebsiteHeader = () => {
  return (
    <>
      <img src={logo} alt="Northcoders N" className="smallHeaderNorthcodersN" />
      <h1 className="WebsiteHeader">Northcoders News</h1>
    </>
  );
};

export default WebsiteHeader;
