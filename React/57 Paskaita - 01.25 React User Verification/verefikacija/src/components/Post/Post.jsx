import UserContext from "../../contexts/UserContext";
import PostContext from "../../contexts/PostContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Post = ({ data }) => {

  const { users, loggedInUser } = useContext(UserContext);
  const { deletePost } = useContext(PostContext);

  const postOwner = users.find(user => user.id === data.userId);

  return (
    <div className="Post">
      <img
        src={postOwner.avatar}
        alt="user avatar"
      />
      <span>{postOwner.userName}</span>
      {
        loggedInUser && loggedInUser.id === postOwner.id &&
        <>
          <button onClick={() => deletePost(data.id)}>Delete</button>
          <button><Link to={`/editPost/${data.id}`}>Edit</Link></button>
        </>
      }
      <hr />
      <h1>{data.heading}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export default Post;