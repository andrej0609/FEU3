import React, { useContext } from "react";
import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";

const FavoritesPage = () => {
  const { liked } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);

  const userLikedPosts = liked.filter(like => like.id === loggedInUser.id);
  const postIds = userLikedPosts.map(like => like.postId);

  return (
    <div>
      <h1>Your Favorite Posts</h1>
      <ul>
        {postIds.map(postId => (
          <li key={postId}>{postId}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;