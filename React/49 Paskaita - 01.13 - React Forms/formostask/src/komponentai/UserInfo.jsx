function UserInfo(props) {
  return (
    <div className="user-info">
      <div>
        <div className="name">John Deere</div>
        <p>Marked: <div className="marked-articles">{props.markedCount}</div></p>
      </div>
      <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="User Icon" className="user-icon" />
    </div>
  );
}



export default UserInfo;