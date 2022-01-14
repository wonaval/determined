// Import modules
import { useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Import useContext
import { UserContext } from '../global/UserContext';

// Import Components
import HomeAbout from './HomeAbout';
import HomeSignin from './HomeSignin';
import HomeSignup from './HomeSignup';

// Import CSS
import './index.css';

const Home = () => {
  let navigate = useNavigate();

  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeAbout />} />
        <Route path="/about" element={<HomeAbout />} />
        <Route
          path="/signup"
          element={
            user.name ? (
              navigate('../routine', { replace: true })
            ) : (
              <HomeSignup />
            )
          }
        />
        <Route
          path="/signin"
          element={
            user.name ? (
              navigate('../routine', { replace: true })
            ) : (
              <HomeSignin />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
