import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState();

  const [users, setUsers] = useState([
    {
      id: 0,
      level: 'admin',
      userName: 'admin',
      password: 'admin',
      avatar: 'https://i.pravatar.cc/150?img=11'
    }, {
      id: 1,
      level: 'user',
      userName: 'user',
      password: 'user',
      avatar: 'https://i.pravatar.cc/150?img=2'
    }, {
      id: 2,
      level: 'user',
      userName: 'user2',
      password: 'user2',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ]);
  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  return (
    <UserContext.Provider
      value={{
        users,
        addNewUser,
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