import React from "react";

function User(props) {
  return (
    <div className="user-info">
      <div>
        <button onClick={props.atsijungti}>Atsijungti</button>
        <div className="name">John Deere</div>
        <p>Marked:</p>
        <div className="marked-articles">{props.markedCount}</div>
      </div>
      <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="User Icon" className="user-icon" />
    </div>
  );
}



export default User;