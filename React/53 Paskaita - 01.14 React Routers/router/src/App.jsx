import './App.css';
import Home from './komponentai/Home';
import UserLogin from './komponentai/UserLogin';
import UserRegistration from './komponentai/UserRegistration';
import Cards from './komponentai/Cards';
import Card from './komponentai/Card';
import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [cards] = useState([
    {
      tekstas: "laabs",
      id: 1
    },
    {
      tekstas: "Vakaras",
      id: 2
    },
    {
      tekstas: "Koks",
      id: 3
    },
    {
      tekstas: "Tu",
      id: 4
    },
    {
      tekstas: "Senas",
      id: 5
    }
  ]);


  return (
    <>
      <nav>
        <h1>Menu </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/registration" element={
          <UserRegistration />
        } />
        <Route path="/login" element={
          <UserLogin />
        } />
        <Route path="/cards" element={
          <Cards
            data={cards}
          />
        } />
        <Route path="/cards/card/:id" element={
          <Card
            data={cards}
          />} />
        <Route path="*" element={
          <h1>404 Not Found</h1>
        } />
      </Routes>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
