import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigate = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigate('/');
  }

  return (
    <>
      <div>
        <Link to={`/`}>Home</Link>
        <Link to={`/newPost`}>New Post</Link>
        <Link to={`/user`}>User Page</Link>
        <img
          src={loggedInUser.avatar}
          alt="user avatar"
          style={{ width: '30px', height: 'auto' }}
        />
        <span>{loggedInUser.userName}</span>
        <button onClick={logOutUser}>Log Out</button>
      </div>
    </>
  );
}

export default UserInfo;
