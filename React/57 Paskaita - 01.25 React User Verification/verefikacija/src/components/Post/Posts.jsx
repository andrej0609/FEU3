import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import Post from "./Post";

const Posts = () => {

  const { posts } = useContext(PostContext);
  const { users } = useContext(UserContext);

  const bannedUsers = users.map(user => user.isBanned && user.id).filter(item => item !== false);
  const availablePosts = posts.filter(post => !bannedUsers.includes(post.userId));

  return (
    <>
      {
        availablePosts.map(post =>
          <Post
            key={post.id}
            data={post}
          />
        )
      }
    </>
  );
}

export default Posts;