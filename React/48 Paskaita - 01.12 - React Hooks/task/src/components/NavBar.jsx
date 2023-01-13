import React, { useState } from 'react';

const Navbar = (props) => {
  const [] = useState(0);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/fiverr-logo-1.png" alt="logo" />
      </div>
      <div className="user-info">
        <div className="icon">
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="user icon" />
        </div>
        <div className="name">John Deere</div>
        <div className="marked-articles">{props.markedArticles}</div>
      </div>
    </div>
  );
}


export default Navbar;
