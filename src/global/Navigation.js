// Imports Modules
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Import useContext
import { UserContext } from '../global/UserContext';

// Import CSS
import './Navigation.css';

const Navigation = () => {
  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  return (
    <div className="navigation">
      <span className="nav-link">
        <Link to="/">Home</Link>
      </span>
      {user.name ? (
        <div>
          <div className="nav-link">
            <Link to="/routine">My Routines</Link>
          </div>
          <div className="nav-link">
            <Link to="/log">My Logs</Link>
          </div>
          <div className="nav-link">
            <Link to="/account">My Account</Link>
          </div>
          <div
            className="nav-link"
            onClick={() => {
              localStorage.removeItem('user_id');
              setUser({});
            }}
          >
            Sign out
          </div>
        </div>
      ) : (
        <div>
          <div className="nav-link">
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="nav-link">
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
