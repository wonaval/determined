// Import Modules
import { useState, useContext } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import { useNavigate } from 'react-router-dom';

// Import useContext
import { UserContext } from '../global/UserContext';

const HomeSignup = () => {
  // useNavigate
  let navigate = useNavigate();

  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  // useState
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Component Functions
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${env.REACT_APP_BACKEND_URL}/user`, {
        name: name,
        username: username,
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
      <div className="header">Sign up</div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          className="sign-inputs"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={username}
          placeholder="Username"
          className="sign-inputs"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="sign-inputs"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="sign-inputs"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="sign-button" value="Sign Up" />
      </form>
    </div>
  );
};

export default HomeSignup;
