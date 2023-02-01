import React, { useContext, useEffect } from "react";
import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";
import Monkey from "../img/monkey.gif"
import { useState } from "react";

const FavoritesPage = () => {
  const { loggedInUser } = useContext(UserContext);
  const [liked, setLiked] = useState ([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleDislike } = useContext(PostContext);

  useEffect(() => {
    if (!loggedInUser) {
      setError("Please log in to see your liked posts.");
      setLoading(false);
      return;
    }
    fetch('http://localhost:5000/liked')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(liked => {
        console.log(liked);  // Log the value of liked here
        setLiked(liked)
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [loggedInUser]);

  if (loading) {
    return (
      <div className="loading">
        <img src={Monkey} alt="loading" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        Error: {error}
      </div>
    );
  }

  if (!liked || !liked.length) {
    return (
      <div className="empty">
        No liked posts
      </div>
    );
  }

  return (
    <div className="Liked">
      {liked.map(liked => (
        <div key={liked.id}>
          <img src={liked.avatar} alt="avatar" />
          <h3>{liked.heading}</h3>
          <p>{liked.content}</p>
          <button onClick={() => handleDislike(liked.id)}>Dislike</button>
        </div>
      ))}
    </div>
  );
}


export default FavoritesPage;