// Imports Modules
import { useEffect, useContext } from 'react';
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
      {/* <Header /> */}
      <Navigation />
      {/* <Home /> */}
      {/* <Routines /> */}
      {/* <Logs /> */}
      <Account />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
