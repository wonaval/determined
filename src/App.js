// Imports Modules
import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import env from 'react-dotenv';
import axios from 'axios';

// Import useContext
import { UserContext } from './global/UserContext';

// Import global components
import Header from './global/Header';
import Navigation from './global/Navigation';
import Footer from './global/Footer';

// Import pages
import Home from './Home';
import Routines from './Routine';
import Logs from './Log';
import Account from './Account';

// Import CSS
import './App.css';

const App = () => {
  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  // useEffect - On load
  useEffect(() => {
    fetchUser();
  }, []);

  // App Functions
  // Fetch user if there is localStorage token
  const fetchUser = () => {
    const user_id = localStorage.getItem('user_id');
    if (user_id) {
      axios
        .get(`${env.REACT_APP_BACKEND_URL}/user/verify`, {
          headers: { Authorization: user_id },
        })
        .then((response) => {
          setUser(response.data.user);
        });
    }
  };

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route
          path="/account"
          element={user.name ? <Account /> : <Navigate to="/signin" />}
        />
        <Route
          path="/log"
          element={user.name ? <Logs /> : <Navigate to="/signup" />}
        />
        <Route
          path="/log/:routine_id"
          element={user.name ? <Logs /> : <Navigate to="/signup" />}
        />
        <Route
          path="/routine"
          element={user.name ? <Routines /> : <Navigate to="/signup" />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
