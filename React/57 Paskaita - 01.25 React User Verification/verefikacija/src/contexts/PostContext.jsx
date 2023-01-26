import { createContext, useState } from "react";
import { useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  const addNewPost = async (newPost) => {
    // Make a POST request to the server
    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: { 'Content-Type': 'application/json' }
    });
    const updatedData = await res.json();
    setPosts([...posts, updatedData]);
  }

  const deletePost = async (id) => {
    // Make a DELETE request to the server
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE'
    });
    setPosts(posts.filter(post => post.id !== id));
  }

  const updatePost = async (id, updatedPost) => {
    // Make a PATCH request to the server
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedPost),
      headers: { 'Content-Type': 'application/json' }
    });
    setPosts(posts.map(post => post.id.toString() === id ? { ...post, ...updatedPost } : post));
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost,
        deletePost,
        updatePost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;