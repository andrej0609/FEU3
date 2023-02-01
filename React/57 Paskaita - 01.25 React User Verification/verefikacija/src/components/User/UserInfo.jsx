import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigation('/');
  }

  return (
    <div className="UserInfo">
      <div>
        <Link to="/">HOME</Link>
      </div>
      <div>
        {
          (loggedInUser.level === 'admin') && <Link to="/users">Manage Users</Link>
        }
        <Link to="/newPost">Add new post</Link>
        <Link to="/likedPosts">Liked Posts</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/user">
          <img
            src={loggedInUser.avatar}
            alt="user avatar"
          />
          <span className="Username">{loggedInUser.userName}</span>
          <span className="Role">{loggedInUser.level}</span>
        </Link>
        <button onClick={() => logOutUser()}>LogOut</button>
      </div>
    </div>
  );
}

export default UserInfo;