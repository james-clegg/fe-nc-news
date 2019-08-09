import React from "react";

const WebsiteHeader = (props) => {
  return (
    <div className='headerFlex'>
      <h1 className='websiteHeader'>Northcoders News</h1><p className='headerIcon'><span class="iconify" data-icon="fa-solid:user-alt" data-inline="false"></span> {props.user}</p>
    </div>
  );
};

export default WebsiteHeader;
