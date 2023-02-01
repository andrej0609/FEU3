import { createContext, useState } from "react";
import { useEffect } from "react";
import Monkey from "../components/img/monkey.gif"

const PostContext = createContext();

const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      setPosts(data.map(post => ({ ...post, likes: 0 })));
      setLoading(false);
    }
    fetchData();
  }, []);


  if (loading) {
    return <div className="loading">
      <img src={Monkey} alt="loading" />
    </div>
  }

  const addNewPost = async (newPost) => {
    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: { 'Content-Type': 'application/json' }
    });
    const updatedData = await res.json();
    setPosts([...posts, updatedData]);
  }

  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE'
    });
    setPosts(posts.filter(post => post.id !== id));
  }

  const updatePost = async (id, updatedPost) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedPost),
      headers: { 'Content-Type': 'application/json' }
    });
    setPosts(posts.map(post => post.id.toString() === id ? { ...post, ...updatedPost } : post));
  }

  const handleLike = async (id, userId, avatar, heading, content) => {
    const likedPost = liked.find(post => post.id === id && post.userId === userId);

    if (likedPost) {
      handleDislike(likedPost.id);
      return;
    }

    await fetch('http://localhost:5000/liked', {
      method: 'POST',
      body: JSON.stringify({
        id: Date.now(),
        userId,
        avatar,
        heading,
        content
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    setLiked([...liked, { id, userId, avatar, heading, content }]);
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleDislike = async (id) => {
    await fetch(`http://localhost:5000/liked/${id}`, {
      method: 'DELETE'
    });
    setLiked(liked.filter(post => post.id !== id));
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes - 1 } : post));
  };


  return (
    <PostContext.Provider
      value={{
        posts,
        liked,
        addNewPost,
        deletePost,
        updatePost,
        handleLike,
        handleDislike
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;