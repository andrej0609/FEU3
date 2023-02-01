import './App.css';
import Header from './components/Menu/Header';
import Main from './components/Main';
import Register from './components/Menu/Register';
import Login from './components/Menu/Login';
import UserPage from './components/User/UserPage';
import UsersPage from './components/User/UsersPage';
import NewPostForm from './components/Post/NewPostForm';
import EditPostForm from './components/Post/EditpostForm';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './components/User/FavoritesPage';
import MessageList from './components/User/MessageList';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/newPost" element={<NewPostForm />} />
          <Route path="/editPost/:id" element={<EditPostForm />} />
          <Route path="/likedPosts" element={<FavoritesPage />} />
          <Route path="/messages" element={<MessageList />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;