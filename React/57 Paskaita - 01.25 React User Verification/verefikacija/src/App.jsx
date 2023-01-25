import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserPage from './components/UserPage';
import NewPost from './components/NewPost';


function App() {
  return (
    <>
      <Routes>
        <Route path='/'
          element={
            <>
              <Header />
              <hr />
              <Main />
            </>
          }
        />
        <Route path="/user"
          element={
            <>
              <Header />
              <hr />
              <UserPage />
            </>
          }
        />
        <Route path='/newPost'
          element={
            <>
              <Header />
              <hr />
              <NewPost />
            </>
          }
        />
        <Route path='/register'
          element={
            <Register />
          }
        />
        <Route
          path='/login'
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
