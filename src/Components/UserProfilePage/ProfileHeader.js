import React, { Component } from "react";
import * as API from "../../api";

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
        <p>{user.username}</p>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt={user.username} />
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
