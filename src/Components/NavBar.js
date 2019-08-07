import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbarItem" to="/">
        Home
      </Link>
      <Link className="navbarItem" to="/allArticles">
        All Articles
      </Link>
      <Link className="navbarItem" to="/featuredArticles">
        Featured Articles
      </Link>
    </nav>
  );
};

export default NavBar;
