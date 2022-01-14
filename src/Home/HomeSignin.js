// Import Modules
import { useState, useContext } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import { useNavigate } from 'react-router-dom';

// Import useContext
import { UserContext } from '../global/UserContext';

const HomeSignin = () => {
  // useNavigate
  let navigate = useNavigate();

  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Component Functions
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${env.REACT_APP_BACKEND_URL}/user/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem('user_id', response.data.user_id);
        setUser(response.data.user);
        navigate('../routine', { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="sign-main">
      <div className="header">Sign In</div>
      <form onSubmit={submitForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="sign-inputs"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="sign-inputs"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="sign-button" value="Sign In" />
      </form>
    </div>
  );
};

export default HomeSignin;
