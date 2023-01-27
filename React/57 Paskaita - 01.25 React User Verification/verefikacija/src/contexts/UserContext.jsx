import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, []);

  const addNewUser = (newUser) => {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        setUsers([...users, data.newUser])
      })
  }

  const banOrUnbanUser = (id) => {
    setUsers(users.map(user => user.id.toString() === id.toString() ? { ...user, isBanned: !user.isBanned } : user));
  }

  return (
    <UserContext.Provider
      value={{
        users,
        addNewUser,
        banOrUnbanUser,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;