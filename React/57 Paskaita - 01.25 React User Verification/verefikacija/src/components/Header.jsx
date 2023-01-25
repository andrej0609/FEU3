import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';


const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      {
        loggedInUser ?
          <UserInfo /> :
          <>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
          </>
      }
    </>
  );
}

export default Header;