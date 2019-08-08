import React, { Component } from "react";
import * as API from "../../api";
import styles from "./UserProfilePage.module.css";

class ProfileHeader extends Component {
  state = {
    user: null,
    isLoading: true
  };

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <p>Loading user...</p>;
    return (
      <div>
        <h1 className={styles.userProfileHeader}>{user.username}</h1>
        <p className={styles.userProfileFullName}>Full name: {user.name}</p>
        <img
          className={styles.userProfileImage}
          src={user.avatar_url}
          alt={user.username}
        />
      </div>
    );
  }

  componentDidMount() {
    API.getUserInfo(this.props.username).then(user =>
      this.setState({ user, isLoading: false })
    );
  }
}

export default ProfileHeader;
