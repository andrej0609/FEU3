import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState();

  const [users, setUsers] = useState([
    {
      id: 0,
      level: 'admin',
      isBanned: false,
      userName: 'admin',
      password: 'admin',
      avatar: 'https://i.pravatar.cc/150?img=11'
    }, {
      id: 1,
      level: 'user',
      isBanned: false,
      userName: 'user',
      password: 'user',
      avatar: 'https://i.pravatar.cc/150?img=2'
    }, {
      id: 2,
      level: 'user',
      isBanned: false,
      userName: 'user2',
      password: 'user2',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
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