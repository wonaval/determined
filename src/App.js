// Imports Modules
import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import env from 'react-dotenv';
import axios from 'axios';

// Import useContext
import { UserContext } from './global/UserContext';

// Import global components
import Header from './global/Header';
import Footer from './global/Footer';

// Import pages
import Home from './Home';
import Routines from './Routine';
import LogAdd from './Log/LogAdd';
import LogView from './Log/LogView';
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
      <Routes>
        <Route path="*" element={<Home />} />
        <Route
          path="/account"
          element={user.name ? <Account /> : <Navigate to="/" />}
        />
        <Route
          path="/log"
          element={user.name ? <LogView /> : <Navigate to="/" />}
        />
        <Route
          path="/log/:routine_id"
          element={user.name ? <LogAdd /> : <Navigate to="/" />}
        />
        <Route
          path="/routine"
          element={user.name ? <Routines /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
