// Imports Modules
import { useContext } from 'react';

// Import useContext
import { UserContext } from '../global/UserContext';

// Import CSS
import './Navigation.css';

const Navigation = () => {
  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  return (
    <div>
      <span>Home</span>
      <span>Sign Up</span>
      <span>Sign In</span>
      <span>My Routines</span>
      <span>My Logs</span>
      <span>My Account</span>
      <span
        className="signout"
        onClick={() => {
          localStorage.removeItem('user_id');
          setUser({});
        }}
      >
        Sign out
      </span>
    </div>
  );
};

export default Navigation;
