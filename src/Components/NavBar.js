import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbarItem" to="/">
        Home
      </Link>
      <Link className="navbarItem" to="/articles">
        All Articles
      </Link>
      <Link className="navbarItem" to="/topics">
        Topics
      </Link>
    </nav>
  );
};

export default NavBar;
