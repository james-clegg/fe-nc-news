import React, { Component } from "react";
import * as API from "../../api";
import styles from "./UserProfilePage.module.css";
import ErrorPage from "../ErrorPage";

class ProfileHeader extends Component {
  state = {
    user: null,
    isLoading: true,
    error: null
  };

  render() {
    const { user, isLoading, error } = this.state;
    if (isLoading) return <p>Loading user...</p>;
    if (error) return <ErrorPage error={error} />;
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
    this.getInfoAboutUser();
  }

  getInfoAboutUser = () => {
    API.getUserInfo(this.props.username)
      .then(user => this.setState({ user, isLoading: false }))
      .catch(({ response: { data } }) => {
        this.setState({
          error: { status: data.status, msg: data.msg },
          isLoading: false
        });
      });
  };
}

export default ProfileHeader;
