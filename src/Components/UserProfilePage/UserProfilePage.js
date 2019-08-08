import React from 'react';
import ProfileHeader from './ProfileHeader';
import ArticlesByUser from './ArticlesByUser'

const UserProfilePage = (props) => {
  return (
    <>
      <ProfileHeader username={props.username}/>
      <ArticlesByUser username={props.username}/>
    </>
  );
};

export default UserProfilePage;