import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

class BurgerMenu extends Component {
  render() {
    return (
      <Menu>
        <a id="Home" className="menu-item" href="/">
          Home
        </a>
        <a id="All articles" className="menu-item" href="/allArticles">
          All articles
        </a>
        <a
          id="My Profile"
          className="menu-item"
          href={`/users/${this.props.username}`}
        >
          My profile
        </a>
      </Menu>
    );
  }
}

export default BurgerMenu;
