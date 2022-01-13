// Import Modules
import { useState, useContext } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

// Import useContext
import { UserContext } from '../global/UserContext';

const HomeSignin = () => {
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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>Sign In</div>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="passwords">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default HomeSignin;
