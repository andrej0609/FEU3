import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: '',
    passwordRepeat: '',
    avatar: ''
  });
  const [invalidUserName, setInvalidUserName] = useState(false);

  const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.find(user => user.userName === formInputs.userName)) {
      setInvalidUserName(true);
      console.log('user already exists');
    } else {
      let newUser = {
        ...formInputs,
        id: users.length + 1,
        level: 'user'
      };
      addNewUser(newUser);
      setLoggedInUser(newUser)
      navigate('/');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input type="text" name="userName" value={formInputs.userName}
            onChange={(e) => setFormInputs({ ...formInputs, userName: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formInputs.password}
            onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
          />
        </label>
        <label>
          Repeat Password:
          <input type="password" name="passwordRepeat" value={formInputs.passwordRepeat}
            onChange={(e) => setFormInputs({ ...formInputs, passwordRepeat: e.target.value })}
          />
        </label>
        <label>
          Avatar:
          <input type="text" name="avatar" value={formInputs.avatar}
            onChange={(e) => setFormInputs({ ...formInputs, avatar: e.target.value })}
          />
        </label>
        <input type="submit" value="Register" />
      </form>
      {
        invalidUserName && <span>UserName already exists</span>
      }
    </>
  );
}

export default Register;