import React from "react";

const UserIcon = props => {
  return (
    <div className='UserIconAndName'>
      <span class="iconify" data-icon="fa-solid:user-alt" data-inline="false" />{" "}
      <p className="headerIcon">{props.user}</p>
    </div>
  );
};

export default UserIcon;
