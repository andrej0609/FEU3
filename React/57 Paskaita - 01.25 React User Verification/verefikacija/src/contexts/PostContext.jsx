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
      setPosts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:5000/liked');
      const data = await res.json();
      setLiked(data);
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
    await fetch('http://localhost:5000/liked', {
      method: 'POST',
      body: JSON.stringify({ id, userId, avatar, heading, content }),
      headers: { 'Content-Type': 'application/json' }
    });
    setLiked([...liked, { id, userId, avatar, heading, content }]);
  }



  const handleDislike = async (id) => {
    await fetch(`http://localhost:5000/liked/${id}`, {
      method: 'DELETE'
    });
    setLiked(liked.filter(like => like.id !== id));
  }


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